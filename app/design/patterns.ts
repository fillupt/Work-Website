/**
 * Pattern generators - create SVG data URIs for visual patterns
 */

interface PatternConfig {
  color: string;
  opacity: number;
  scale: number;
}

export function generateDotPattern(config: PatternConfig): string {
  const { color, opacity, scale } = config;
  const hexColor = colorToHex(color);
  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="${3 * scale}" fill="${hexColor}" opacity="${opacity}"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#dots)"/>
    </svg>
  `.trim();
  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}

export function generateGridPattern(config: PatternConfig): string {
  const { color, opacity, scale } = config;
  const hexColor = colorToHex(color);
  const strokeWidth = 0.5 * scale;
  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="none" stroke="${hexColor}" stroke-width="${strokeWidth}" opacity="${opacity}"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)"/>
    </svg>
  `.trim();
  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}

export function generateWavePattern(config: PatternConfig): string {
  const { color, opacity, scale } = config;
  const hexColor = colorToHex(color);
  const amplitude = 8 * scale;
  const svg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="waves" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 Q25,${20 - amplitude},50,20 T100,20" stroke="${hexColor}" stroke-width="1" fill="none" opacity="${opacity}"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#waves)"/>
    </svg>
  `.trim();
  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}

function colorToHex(color: string): string {
  // Handle rgb/rgba format
  if (color.startsWith('rgb')) {
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      return `#${parseInt(match[0]).toString(16).padStart(2, '0')}${parseInt(match[1]).toString(16).padStart(2, '0')}${parseInt(match[2]).toString(16).padStart(2, '0')}`;
    }
  }
  // Already hex or other format
  return color;
}

export function getPatternUrl(
  patternName: 'dots' | 'grid' | 'waves',
  color: string,
  opacity: number,
  scale: number = 1
): string {
  const config = { color, opacity, scale };

  switch (patternName) {
    case 'dots':
      return generateDotPattern(config);
    case 'grid':
      return generateGridPattern(config);
    case 'waves':
      return generateWavePattern(config);
    default:
      return '';
  }
}
