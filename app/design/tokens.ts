/**
 * Design tokens for the "Tech-Forward" aesthetic (Option 1)
 * Focuses on deep dark backgrounds, glassmorphism, and vibrant cyan/purple gradients.
 */

export type DesignVariant = 'flat' | 'depth-subtle' | 'depth-bold';

export interface ColorPalette {
  background: string;
  foreground: string;
  primary: string;
  primaryLight: string;
  secondary: string;
  accent: string;
  border: string;
  shadow: string;
  shadowOpacity: number;
}

export interface VariantConfig {
  light: ColorPalette;
  dark: ColorPalette;
  gradients: {
    banner: string;
    bio: string;
    card: string;
    panelPrimary: string;
    panelSecondary: string;
  };
  patterns: {
    name: 'dots' | 'grid' | 'waves';
    opacity: number;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  animations: {
    fadeIn: string;
    float: string;
    gradientShift: string;
    patternPulse: string;
    hoverScale: number;
  };
}

const tokens: Record<DesignVariant, VariantConfig> = {
  flat: {
    light: {
      background: '#f8fafc',
      foreground: '#0f172a',
      primary: '#06b6d4', // Cyan
      primaryLight: '#22d3ee',
      secondary: '#ffffff',
      accent: '#8b5cf6', // Violet
      border: '#e2e8f0',
      shadow: '#0f172a',
      shadowOpacity: 0.05,
    },
    dark: {
      background: '#030712',
      foreground: '#f8fafc',
      primary: '#22d3ee',
      primaryLight: '#67e8f9',
      secondary: '#0f172a',
      accent: '#a78bfa',
      border: '#1e293b',
      shadow: '#000000',
      shadowOpacity: 0.5,
    },
    gradients: {
      banner: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      bio: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
      card: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
      panelPrimary: 'linear-gradient(135deg, #f0fdfa 0%, #eff6ff 100%)',
      panelSecondary: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    },
    patterns: {
      name: 'dots',
      opacity: 0.05,
    },
    shadows: {
      sm: 'none',
      md: 'none',
      lg: 'none',
    },
    animations: {
      fadeIn: '0.4s ease-out',
      float: 'none',
      gradientShift: 'none',
      patternPulse: 'none',
      hoverScale: 1,
    },
  },

  'depth-subtle': {
    light: {
      background: '#f8fafc',
      foreground: '#0f172a',
      primary: '#06b6d4',
      primaryLight: '#22d3ee',
      secondary: 'rgba(255, 255, 255, 0.7)',
      accent: '#8b5cf6',
      border: 'rgba(255, 255, 255, 0.5)',
      shadow: '#0ea5e9',
      shadowOpacity: 0.1,
    },
    dark: {
      background: '#020617', // Very deep blue/black
      foreground: '#f1f5f9',
      primary: '#22d3ee',
      primaryLight: '#67e8f9',
      secondary: 'rgba(15, 23, 42, 0.6)', // Glassmorphic card bg
      accent: '#a78bfa',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: '#000000',
      shadowOpacity: 0.5,
    },
    gradients: {
      banner: 'linear-gradient(135deg, #0284c7 0%, #8b5cf6 50%, #d946ef 100%)',
      bio: 'linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.8) 100%)',
      card: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 100%)',
      panelPrimary: 'linear-gradient(135deg, rgba(240,253,250,0.8) 0%, rgba(239,246,255,0.8) 100%)',
      panelSecondary: 'linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(241,245,249,0.8) 100%)',
    },
    patterns: {
      name: 'grid',
      opacity: 0.1,
    },
    shadows: {
      sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    animations: {
      fadeIn: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      float: '4s ease-in-out infinite',
      gradientShift: '8s ease-in-out infinite',
      patternPulse: '5s ease-in-out infinite',
      hoverScale: 1.02,
    },
  },

  'depth-bold': {
    light: {
      background: '#f1f5f9',
      foreground: '#020617',
      primary: '#0891b2',
      primaryLight: '#06b6d4',
      secondary: 'rgba(255, 255, 255, 0.8)',
      accent: '#7c3aed',
      border: 'rgba(255, 255, 255, 0.8)',
      shadow: '#38bdf8',
      shadowOpacity: 0.15,
    },
    dark: {
      background: '#000000', // Pure black
      foreground: '#f8fafc',
      primary: '#22d3ee', // Cyan
      primaryLight: '#67e8f9',
      secondary: 'rgba(15, 23, 42, 0.4)', // Heavy glass
      accent: '#c084fc', // Purple
      border: 'rgba(34, 211, 238, 0.2)', // Glowing border base
      shadow: '#22d3ee', // Neon shadow
      shadowOpacity: 0.15,
    },
    gradients: {
      banner: 'linear-gradient(to right, #4f46e5, #06b6d4, #c084fc)',
      bio: 'radial-gradient(circle at center, rgba(34,211,238,0.15) 0%, transparent 70%)',
      card: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
      panelPrimary: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.1) 100%)',
      panelSecondary: 'linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)',
    },
    patterns: {
      name: 'grid',
      opacity: 0.2,
    },
    shadows: {
      sm: '0 0 10px rgba(34, 211, 238, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
      md: '0 0 20px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
      lg: '0 0 30px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    animations: {
      fadeIn: '0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      float: '3s ease-in-out infinite',
      gradientShift: '5s ease-in-out infinite',
      patternPulse: '3s ease-in-out infinite',
      hoverScale: 1.03,
    },
  },
};

export function getTokens(variant: DesignVariant): VariantConfig {
  return tokens[variant];
}

export function getColorPalette(variant: DesignVariant, isDark: boolean): ColorPalette {
  const variantTokens = tokens[variant];
  return isDark ? variantTokens.dark : variantTokens.light;
}
