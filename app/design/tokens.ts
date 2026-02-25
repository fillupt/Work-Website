/**
 * Design tokens for different variants (flat, depth-subtle, depth-bold)
 * Each variant has separate light/dark mode palettes following industry standards
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
      background: '#ffffff',
      foreground: '#1a1a1a',
      primary: '#2563eb',
      primaryLight: '#3b82f6',
      secondary: '#f0f4f8',
      accent: '#1e40af',
      border: '#e5e7eb',
      shadow: '#000000',
      shadowOpacity: 0,
    },
    dark: {
      background: '#111827',
      foreground: '#f3f4f6',
      primary: '#3b82f6',
      primaryLight: '#60a5fa',
      secondary: '#1f2937',
      accent: '#60a5fa',
      border: '#374151',
      shadow: '#000000',
      shadowOpacity: 0,
    },
    gradients: {
      banner: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      bio: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
      panelPrimary: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
      panelSecondary: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)',
    },
    patterns: {
      name: 'dots',
      opacity: 0,
    },
    shadows: {
      sm: 'none',
      md: 'none',
      lg: 'none',
    },
    animations: {
      fadeIn: '0.3s ease-out',
      float: 'none',
      gradientShift: 'none',
      patternPulse: 'none',
      hoverScale: 1,
    },
  },

  'depth-subtle': {
    light: {
      background: '#ffffff',
      foreground: '#1a1a1a',
      primary: '#2563eb',
      primaryLight: '#3b82f6',
      secondary: '#f0f9ff',
      accent: '#0ea5e9',
      border: '#dbeafe',
      shadow: '#000000',
      shadowOpacity: 0.05,
    },
    dark: {
      background: '#0f172a',
      foreground: '#f1f5f9',
      primary: '#3b82f6',
      primaryLight: '#60a5fa',
      secondary: '#1e293b',
      accent: '#38bdf8',
      border: '#334155',
      shadow: '#000000',
      shadowOpacity: 0.3,
    },
    gradients: {
      banner: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
      bio: 'linear-gradient(to bottom, #ffffff 0%, #f0f9ff 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      panelPrimary: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      panelSecondary: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    },
    patterns: {
      name: 'dots',
      opacity: 0.08,
    },
    shadows: {
      sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
      md: '0 4px 12px rgba(0, 0, 0, 0.08)',
      lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
    },
    animations: {
      fadeIn: '0.6s ease-out',
      float: '3s ease-in-out infinite',
      gradientShift: '6s ease-in-out infinite',
      patternPulse: '4s ease-in-out infinite',
      hoverScale: 1.02,
    },
  },

  'depth-bold': {
    light: {
      background: '#ffffff',
      foreground: '#0f172a',
      primary: '#2563eb',
      primaryLight: '#3b82f6',
      secondary: '#e0f2fe',
      accent: '#0284c7',
      border: '#7dd3fc',
      shadow: '#000000',
      shadowOpacity: 0.12,
    },
    dark: {
      background: '#0c1929',
      foreground: '#f1f5f9',
      primary: '#3b82f6',
      primaryLight: '#60a5fa',
      secondary: '#1e3a8a',
      accent: '#06b6d4',
      border: '#0ea5e9',
      shadow: '#000000',
      shadowOpacity: 0.4,
    },
    gradients: {
      banner: 'linear-gradient(135deg, #1e40af 0%, #2563eb 25%, #3b82f6 50%, #0ea5e9 100%)',
      bio: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)',
      card: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
      panelPrimary: 'linear-gradient(135deg, #dbeafe 0%, #bae6fd 100%)',
      panelSecondary: 'linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 100%)',
    },
    patterns: {
      name: 'grid',
      opacity: 0.15,
    },
    shadows: {
      sm: '0 2px 6px rgba(0, 0, 0, 0.08)',
      md: '0 6px 16px rgba(0, 0, 0, 0.1)',
      lg: '0 12px 32px rgba(0, 0, 0, 0.12)',
    },
    animations: {
      fadeIn: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      float: '3.5s ease-in-out infinite',
      gradientShift: '6s ease-in-out infinite',
      patternPulse: '4s ease-in-out infinite',
      hoverScale: 1.02,
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
