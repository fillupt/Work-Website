const fs = require('fs');

const fileContent = fs.readFileSync('app/data/publications.ts', 'utf8');
const jsonMatch = fileContent.match(/export const publications: Publication\[\] = (\[[\s\S]*\]);/);
if (jsonMatch) {
  const pubs = eval(jsonMatch[1]);
  console.log(`Loaded ${pubs.length} publications.`);
  let missingDoi = pubs.filter(p => !p.doi);
  console.log(`Missing DOI: ${missingDoi.length}`);
  // Just print a few to see
  console.log(missingDoi.slice(0, 5).map(p => p.title));
}
