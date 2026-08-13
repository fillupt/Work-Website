/**
 * Variant utility functions - generate classes and styles for different design variants
 */

import { DesignVariant, getTokens, getColorPalette } from './tokens';
import { getPatternUrl } from './patterns';

export interface VariantStyles {
  className: string;
  style: React.CSSProperties;
  animationClass: string;
}

export function getHeaderClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);

  // Modern glassmorphic header
  let className = 'sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b';
  const style: React.CSSProperties = {
    backgroundColor: isDark ? 'rgba(3, 7, 18, 0.7)' : 'rgba(255, 255, 255, 0.8)',
    borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
  };

  return {
    className,
    style,
    animationClass: '',
  };
}

export function getBannerClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  
  // Tech-forward banner with animated gradient
  let className = 'relative py-3 bg-cover bg-center overflow-hidden';
  const style: React.CSSProperties = {
    background: tokens.gradients.banner,
    backgroundSize: '200% 200%',
  };

  return {
    className,
    style,
    animationClass: 'animate-gradientShift text-white font-medium tracking-wide',
  };
}

export function getBioSectionClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);

  let className = 'relative transition-all duration-300';
  const style: React.CSSProperties = {
    background: tokens.gradients.bio,
  };

  if (tokens.patterns.opacity > 0) {
    const patternColor = isDark ? colors.primary : colors.accent;
    const patternUrl = getPatternUrl(tokens.patterns.name, patternColor, tokens.patterns.opacity);
    style.backgroundImage = `${tokens.gradients.bio}, ${patternUrl}`;
  }

  return {
    className,
    style,
    animationClass: 'animate-fadeIn',
  };
}

export function getCardClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);

  // Tech glass card
  let className = 'relative rounded-2xl p-8 border transition-all duration-300 backdrop-blur-md group overflow-hidden';
  const style: React.CSSProperties = {
    background: tokens.gradients.card,
    borderColor: colors.border,
    boxShadow: tokens.shadows.sm,
  };

  // Hover effects
  const hoverClass = 'hover:shadow-lg hover:border-cyan-500/30 dark:hover:border-cyan-400/50';

  return {
    className: `${className} ${hoverClass}`,
    style,
    animationClass: 'animate-fadeIn',
  };
}

export function getClickableCardClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);

  let className = 'relative rounded-2xl p-8 border transition-all duration-300 backdrop-blur-md group overflow-hidden cursor-pointer';
  const style: React.CSSProperties = {
    background: tokens.gradients.card,
    borderColor: colors.border,
    boxShadow: tokens.shadows.md,
  };

  // Extreme glowing hover effect for tech theme
  const hoverClass = isDark 
    ? 'hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/50'
    : 'hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/50';

  return {
    className: `${className} ${hoverClass}`,
    style,
    animationClass: 'animate-fadeIn',
  };
}

export function getPanelClasses(
  variant: DesignVariant,
  isDark: boolean,
  tone: 'primary' | 'secondary'
): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);

  let className = 'relative rounded-3xl p-10 border transition-all duration-300 backdrop-blur-lg overflow-hidden';
  const style: React.CSSProperties = {
    background: tone === 'primary' ? tokens.gradients.panelPrimary : tokens.gradients.panelSecondary,
    borderColor: colors.border,
    boxShadow: tokens.shadows.lg,
  };

  if (tokens.patterns.opacity > 0) {
    const patternColor = isDark ? colors.primary : colors.accent;
    const patternUrl = getPatternUrl(tokens.patterns.name, patternColor, tokens.patterns.opacity * 0.5);
    style.backgroundImage = `${style.background}, ${patternUrl}`;
  }

  return {
    className,
    style,
    animationClass: 'animate-fadeIn',
  };
}

export function getAnimationDelay(index: number, variant: DesignVariant): string {
  return `${index * 75}ms`;
}
