const fs = require('fs');
const https = require('https');

const fileContent = fs.readFileSync('app/data/publications.ts', 'utf8');
const jsonMatch = fileContent.match(/export const publications: Publication\[\] = (\[[\s\S]*\]);/);
const pubs = eval(jsonMatch[1]);

function fetchCrossref(pub) {
  return new Promise((resolve) => {
    if (pub.type === 'report') {
        resolve(null);
        return;
    }
    const query = encodeURIComponent(`${pub.title} ${pub.authors[0]}`);
    const url = `https://api.crossref.org/works?query=${query}&rows=1&mailto=test@example.com`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.message && json.message.items && json.message.items.length > 0) {
            const item = json.message.items[0];
            // Verify title match roughly
            const itemTitle = item.title ? item.title[0].toLowerCase() : '';
            const pubTitle = pub.title.toLowerCase();
            // Jaccard similarity or just simple substring
            if (itemTitle.includes(pubTitle.substring(0, 10)) || pubTitle.includes(itemTitle.substring(0, 10))) {
               resolve(item);
               return;
            }
          }
        } catch (e) {}
        resolve(null);
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const updates = [];
  const missing = [];
  
  for (let i = 0; i < pubs.length; i++) {
    const pub = pubs[i];
    console.log(`Checking ${i + 1}/${pubs.length}: ${pub.title}`);
    const result = await fetchCrossref(pub);
    if (result) {
      const doi = result.DOI;
      const volume = result.volume;
      const pages = result.page;
      let needsUpdate = false;
      const update = { id: pub.id };
      if (doi && pub.doi !== doi) { update.doi = doi; needsUpdate = true; }
      if (volume && !pub.volume) { update.volume = volume; needsUpdate = true; }
      if (pages && !pub.pages) { update.pages = pages; needsUpdate = true; }
      if (needsUpdate) updates.push(update);
    } else {
      missing.push(pub.title);
    }
    // Sleep a bit to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync('.gemini/scratch/updates.json', JSON.stringify(updates, null, 2));
  fs.writeFileSync('.gemini/scratch/missing.json', JSON.stringify(missing, null, 2));
  console.log(`Found updates for ${updates.length} items. Missing ${missing.length} items.`);
}

run();
