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
  const isFlat = variant === 'flat';

  let className = 'relative bg-cover bg-center transition-all duration-300';
  const style: React.CSSProperties = {};

  if (isFlat) {
    style.backgroundColor = colors.background;
  } else {
    style.background = `${tokens.gradients.banner}, linear-gradient(135deg, ${colors.background} 0%, ${colors.secondary} 100%)`;
    style.boxShadow = `0 4px 12px ${colors.shadow}`;
  }

  const logoSize = variant === 'flat' ? 'text-xl' : variant === 'depth-subtle' ? 'text-2xl' : 'text-3xl';
  const textShadow = variant === 'flat' ? 'none' : variant === 'depth-subtle' ? '0 2px 4px rgba(0,0,0,0.1)' : '0 4px 8px rgba(0,0,0,0.15)';

  return {
    className,
    style,
    animationClass: tokens.animations.fadeIn !== 'none' ? `animate-fadeInSlide` : '',
  };
}

export function getBannerClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'relative bg-blue-600 dark:bg-blue-700 text-white py-3 bg-cover bg-center overflow-hidden';
  const style: React.CSSProperties = {};

  if (isFlat) {
    style.backgroundColor = colors.primary;
  } else {
    style.background = tokens.gradients.banner;
    const patternUrl = getPatternUrl(tokens.patterns.name, colors.primaryLight, tokens.patterns.opacity);
    style.backgroundImage = `${tokens.gradients.banner}, ${patternUrl}`;
    style.boxShadow = tokens.shadows.md;
  }

  const animationClass = variant === 'flat' ? '' : 'animate-gradientShift';

  return {
    className,
    style,
    animationClass,
  };
}

export function getBioSectionClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'relative bg-gradient-to-b transition-all duration-300';
  const style: React.CSSProperties = {};

  if (isFlat) {
    style.backgroundColor = colors.background;
    className += ' from-white to-gray-50 dark:from-gray-900 dark:to-gray-950';
  } else {
    const gradient = isDark
      ? `linear-gradient(to bottom, #0c1929 0%, #111827 100%)`
      : tokens.gradients.bio;
    style.background = gradient;
    if (tokens.patterns.opacity > 0) {
      const patternColor = isDark ? colors.border : colors.accent;
      const patternUrl = getPatternUrl(tokens.patterns.name, patternColor, tokens.patterns.opacity * 0.5);
      style.backgroundImage = `${gradient}, ${patternUrl}`;
    }
  }

  return {
    className,
    style,
    animationClass: tokens.animations.fadeIn !== 'none' ? 'animate-fadeInSlide' : '',
  };
}

export function getCardClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'bg-white dark:bg-gray-800 rounded-xl p-8 border transition-all duration-300';
  const style: React.CSSProperties = {
    borderColor: colors.border,
  };

  if (isFlat) {
    style.backgroundColor = colors.background;
  } else {
    const gradient = isDark
      ? `linear-gradient(145deg, ${colors.background} 0%, ${colors.secondary} 65%, ${colors.border} 100%)`
      : tokens.gradients.card;
    style.background = gradient;
    style.boxShadow = tokens.shadows.sm;
    style.borderColor = colors.accent;
  }

  // Refined hover effect - more subtle and professional
  const hoverClass = variant === 'flat'
    ? ''
    : 'hover:shadow-md';

  return {
    className: `${className} ${hoverClass}`,
    style,
    animationClass: 'animate-fadeInSlide',
  };
}

export function getClickableCardClasses(variant: DesignVariant, isDark: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'bg-white dark:bg-gray-800 rounded-xl p-8 border transition-all duration-300';
  const style: React.CSSProperties = {
    borderColor: colors.border,
  };

  if (isFlat) {
    style.backgroundColor = colors.background;
  } else {
    const gradient = isDark
      ? `linear-gradient(145deg, ${colors.background} 0%, ${colors.secondary} 65%, ${colors.border} 100%)`
      : tokens.gradients.card;
    style.background = gradient;
    style.boxShadow = tokens.shadows.sm;
    style.borderColor = colors.accent;
  }

  // Interactive cards with refined hover effect
  const hoverClass = variant === 'flat'
    ? 'cursor-pointer hover:shadow-md'
    : 'hover:shadow-md hover:scale-[1.02] cursor-pointer';

  return {
    className: `${className} ${hoverClass}`,
    style,
    animationClass: 'animate-fadeInSlide',
  };
}

export function getPanelClasses(
  variant: DesignVariant,
  isDark: boolean,
  tone: 'primary' | 'secondary'
): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'rounded-xl p-10 border transition-all duration-300';
  const style: React.CSSProperties = {
    borderColor: colors.border,
  };

  if (isFlat) {
    style.backgroundColor = colors.secondary;
  } else {
    const baseGradient = tone === 'primary' ? tokens.gradients.panelPrimary : tokens.gradients.panelSecondary;
    const gradient = isDark
      ? `linear-gradient(145deg, ${colors.background} 0%, ${colors.secondary} 60%, ${colors.border} 100%)`
      : baseGradient;
    style.background = gradient;
    style.boxShadow = tokens.shadows.md;
    style.borderColor = colors.accent;

    if (tokens.patterns.opacity > 0) {
      const patternColor = isDark ? colors.border : colors.accent;
      const patternUrl = getPatternUrl(tokens.patterns.name, patternColor, tokens.patterns.opacity * 0.4);
      style.backgroundImage = `${gradient}, ${patternUrl}`;
    }
  }

  return {
    className,
    style,
    animationClass: 'animate-fadeInSlide',
  };
}

export function getTileOverlayClasses(variant: DesignVariant, isDark: boolean, isActive: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = 'absolute inset-0 transition-opacity';
  const style: React.CSSProperties = {};

  if (!isFlat) {
    const gradient = isDark
      ? 'linear-gradient(145deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)'
      : tokens.gradients.card;
    const patternColor = isDark ? colors.border : colors.primaryLight;
    const patternUrl = getPatternUrl(tokens.patterns.name, patternColor, tokens.patterns.opacity * 0.6);
    style.backgroundImage = `${gradient}, ${patternUrl}`;
  } else {
    className += ' bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10';
  }

  return {
    className,
    style,
    animationClass: '',
  };
}

export function getTileIconClasses(variant: DesignVariant, isActive: boolean): string {
  if (variant === 'flat') {
    return isActive
      ? 'text-blue-600 dark:text-blue-400'
      : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500';
  }

  if (variant === 'depth-subtle') {
    return isActive
      ? 'text-blue-600 dark:text-blue-300 drop-shadow-md'
      : 'text-blue-400/70 dark:text-blue-300/70 group-hover:text-blue-500';
  }

  return isActive
    ? 'text-cyan-500 dark:text-cyan-300 drop-shadow-lg'
    : 'text-sky-400/70 dark:text-sky-300/70 group-hover:text-cyan-400';
}

export function getTileTitleClasses(variant: DesignVariant, isDark: boolean, isActive: boolean): string {
  const base = 'text-xl font-semibold tracking-tight transition-colors';

  if (variant === 'flat') {
    return `${base} ${
      isActive
        ? 'text-blue-700 dark:text-blue-200'
        : 'text-gray-800 dark:text-gray-100 group-hover:text-blue-700'
    }`;
  }

  if (variant === 'depth-subtle') {
    return `${base} ${
      isActive
        ? isDark
          ? 'text-blue-200'
          : 'text-blue-700'
        : isDark
          ? 'text-gray-100 group-hover:text-blue-200'
          : 'text-gray-800 group-hover:text-blue-700'
    }`;
  }

  return `${base} ${
    isActive
      ? isDark
        ? 'text-cyan-200'
        : 'text-cyan-700'
      : isDark
        ? 'text-gray-100 group-hover:text-cyan-200'
        : 'text-gray-800 group-hover:text-cyan-700'
  }`;
}

export function getTileClasses(variant: DesignVariant, isDark: boolean, isActive: boolean): VariantStyles {
  const tokens = getTokens(variant);
  const colors = getColorPalette(variant, isDark);
  const isFlat = variant === 'flat';

  let className = `group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 text-left overflow-hidden`;
  const style: React.CSSProperties = {
    borderColor: isActive ? colors.primary : colors.border,
  };

  if (isFlat) {
    style.backgroundColor = colors.background;
  } else {
    style.boxShadow = isActive ? tokens.shadows.lg : tokens.shadows.md;
    if (isActive) {
      style.transform = `scale(1.05)`;
    }
  }

  // Add hover effect for clickable tiles
  const hoverClass = variant === 'flat'
    ? 'hover:shadow-xl cursor-pointer'
    : variant === 'depth-subtle'
      ? 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer'
      : 'hover:shadow-2xl hover:scale-[1.03] cursor-pointer';

  return {
    className: `${className} ${hoverClass}`,
    style,
    animationClass: 'animate-fadeInSlide',
  };
}

export function getAnimationDelay(index: number, variant: DesignVariant): string {
  if (variant === 'flat') return '';
  const baseDelay = variant === 'depth-subtle' ? 75 : 50;
  return `${index * baseDelay}ms`;
}
