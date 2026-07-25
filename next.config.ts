import { execSync } from 'node:child_process';
import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function getLatestCommitIsoTimestamp(): string {
  try {
    return execSync('git log -1 --format=%cI', {
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim();
  } catch {
    // Fallback keeps the footer functional in environments without git metadata.
    return new Date().toISOString();
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_LAST_COMMIT_ISO: getLatestCommitIsoTimestamp(),
  },
};

export default nextConfig;
