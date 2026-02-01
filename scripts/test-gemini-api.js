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

if (!API_KEY) {
  console.error('ERROR: GOOGLE_GEMINI_API_KEY not found');
  process.exit(1);
}

console.log('API Key found. Testing models...\n');

async function testModel(model) {
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${API_KEY}`;
  
  try {
    console.log(`Testing: ${model}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          parts: [{ 
            text: 'Return this JSON: {"test": "success"}' 
          }] 
        }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.log(`  ✗ Error: ${data.error.message}\n`);
      return false;
    }
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      console.log(`  ✓ SUCCESS!\n`);
      console.log(`  Response: ${data.candidates[0].content.parts[0].text}\n`);
      return true;
    }
    
    console.log(`  ✗ Unexpected response structure\n`);
    return false;
  } catch (error) {
    console.log(`  ✗ Error: ${error.message}\n`);
    return false;
  }
}

async function main() {
  const models = [
    'gemini-2.0-flash',
    'gemini-1.5-pro',
    'gemini-1.5-flash',
    'gemini-pro',
  ];

  for (const model of models) {
    const success = await testModel(model);
    if (success) {
      console.log(`\n✓ Found working model: ${model}`);
      process.exit(0);
    }
  }

  console.log('\n✗ No working models found. Check your API key and billing.');
  process.exit(1);
}

main();
