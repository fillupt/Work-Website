const fs = require('fs');
const path = require('path');

// Load API key from .env.local
function loadEnvFile() {
  const envPath = path.join(__dirname, '../.env.local');
  if (!fs.existsSync(envPath)) return null;
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/GOOGLE_GEMINI_API_KEY=(.+)/);
  return match ? match[1].trim() : null;
}

const API_KEY = process.env.GOOGLE_GEMINI_API_KEY || loadEnvFile();
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

async function enrichPublication(publication) {
  const prompt = `You are analyzing an academic publication. Based on the metadata below, provide:
1. A 2-3 sentence summary (accessible to general scientific audience)
2. 3-5 keywords/hashtags

Publication:
Title: ${publication.title}
Authors: ${publication.authors.join(', ')}
Year: ${publication.year}
Journal: ${publication.journal}
${publication.doi ? `DOI: ${publication.doi}` : ''}

Return ONLY valid JSON in this exact format:
{
  "summary": "2-3 sentence summary here",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`;

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    
    // Check for API errors
    if (data.error) {
      throw new Error(`API Error: ${data.error.message}`);
    }
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Unexpected API response:', JSON.stringify(data, null, 2));
      throw new Error('Invalid API response structure');
    }
    
    const text = data.candidates[0].content.parts[0].text;
    
    // Extract JSON from response (may have markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found in response');
    
    const result = JSON.parse(jsonMatch[0]);
    return {
      summary: result.summary,
      keywords: result.keywords
    };
  } catch (error) {
    console.error(`Error enriching "${publication.title}":`, error.message);
    return {
      summary: publication.summary || 'Summary not available.',
      keywords: ['vision-science', 'optometry']
    };
  }
}

async function main() {
  if (!API_KEY) {
    console.error('ERROR: GOOGLE_GEMINI_API_KEY not found in environment');
    console.error('Make sure .env.local exists with your API key');
    process.exit(1);
  }

  const pubPath = path.join(__dirname, '../app/data/publications.ts');
  let content = fs.readFileSync(pubPath, 'utf8');
  
  // Extract publications array
  const arrayMatch = content.match(/export const publications: Publication\[\] = (\[[\s\S]*\]);/);
  if (!arrayMatch) {
    console.error('Could not find publications array');
    process.exit(1);
  }
  
  // Parse with eval (safe because we control the source)
  const publications = eval(arrayMatch[1]);
  console.log(`Found ${publications.length} publications to enrich\n`);

  // Enrich each publication
  for (let i = 0; i < publications.length; i++) {
    const pub = publications[i];
    console.log(`[${i + 1}/${publications.length}] Processing: ${pub.title.substring(0, 60)}...`);
    
    const { summary, keywords } = await enrichPublication(pub);
    pub.summary = summary;
    pub.keywords = keywords;
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Generate new TypeScript content
  const newContent = content.replace(
    /export const publications: Publication\[\] = \[[\s\S]*\];/,
    `export const publications: Publication[] = ${JSON.stringify(publications, null, 2)};`
  );

  // Write back
  fs.writeFileSync(pubPath, newContent, 'utf8');
  console.log(`\n✓ Successfully enriched ${publications.length} publications`);
}

main().catch(console.error);
