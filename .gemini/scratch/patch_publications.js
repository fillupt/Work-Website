const fs = require('fs');

const publicationsPath = 'app/data/publications.ts';
let content = fs.readFileSync(publicationsPath, 'utf8');

const updatesStr = fs.readFileSync('.gemini/scratch/updates.json', 'utf8');
const updates = JSON.parse(updatesStr);

updates.forEach(update => {
  const idStr = `"id": "${update.id}"`;
  const idx = content.indexOf(idStr);
  if (idx !== -1) {
    // Find the end of this object (approximate, before the next object or end of array)
    // Actually, just find the next "type": "journal" or something and insert before it?
    // Better: insert right after the id line
    // find the line with "id": "X",
    const regex = new RegExp(`(\\s*"id":\\s*"${update.id}",)`);
    let patch = ``;
    if (update.doi) patch += `\n    "doi": "${update.doi}",`;
    if (update.volume) patch += `\n    "volume": "${update.volume}",`;
    if (update.pages) patch += `\n    "pages": "${update.pages}",`;
    
    // Check if these fields already exist so we don't duplicate
    const objectChunk = content.substring(idx, content.indexOf('}', idx));
    if (!objectChunk.includes('"doi"')) {
       content = content.replace(regex, `$1${patch}`);
    }
  }
});

fs.writeFileSync(publicationsPath, content);
console.log('Patch complete.');
