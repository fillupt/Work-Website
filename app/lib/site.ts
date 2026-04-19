const DEFAULT_SITE_URL = 'https://fillupt.github.io/Work-Website';

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
  const raw = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!raw || raw === '/') {
    return '';
  }

  return raw.endsWith('/') ? raw.slice(0, -1) : raw;
}

export function buildAssetUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${getBasePath()}${normalizedPath}`;
}
