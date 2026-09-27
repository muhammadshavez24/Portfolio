/**
 * Design System
 * Core color palette and styling constants
 */

export const colors = {
  // Base
  bg: {
    primary: '#050505',
    secondary: '#0a0a0a',
  },
  
  // Accents
  accent: {
    green: '#00ff00',
    greenDark: '#00cc00',
    greenLight: '#33ff33',
  },
  
  violet: {
    primary: '#a855f7',
    dark: '#7c3aed',
  },
  
  blue: {
    primary: '#0ea5e9',
    dark: '#0284c7',
  },
  
  // Glass/Transparent
  glass: {
    light: 'rgba(255, 255, 255, 0.04)',
    border: 'rgba(255, 255, 255, 0.10)',
    hover: 'rgba(255, 255, 255, 0.08)',
  },
  
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.5)',
  },
};

export const motion = {
  // Timing
  duration: {
    fast: 300,
    normal: 400,
    slow: 600,
    veryLarge: 1000,
    extraLarge: 2000,
  },
  
  // Easing
  easing: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  
  // 3D Animation durations
  float: 6000,  // 6s
  rotate: 12000, // 12s
  pulse: 2000,  // 2s
};

export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

export const zIndex = {
  navigation: 1000,
  modal: 2000,
  tooltip: 3000,
};
