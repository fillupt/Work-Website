#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the last commit date
  const lastCommitDate = execSync("git log -1 --format='%cd' --date=format:'%B %d, %Y'", {
    encoding: 'utf-8',
  }).trim();

  // Create the build info file
  const buildInfo = {
    lastUpdated: lastCommitDate,
    buildDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  const outputPath = path.join(__dirname, '..', 'app', 'build-info.json');
  fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

  console.log(`✓ Updated build info with last commit date: ${lastCommitDate}`);
} catch (error) {
  console.error('Error generating build info:', error.message);
  process.exit(1);
}
