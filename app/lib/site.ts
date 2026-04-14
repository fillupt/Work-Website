const DEFAULT_SITE_URL = 'https://fillupt.github.io/Work-Website';
const DEFAULT_BASE_PATH = '/Work-Website';

function stripTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) {
    return DEFAULT_SITE_URL;
  }

  try {
    return stripTrailingSlash(new URL(raw).toString());
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function buildAbsoluteUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || DEFAULT_BASE_PATH;
}

export function buildAssetUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${getBasePath()}${normalizedPath}`;
}
