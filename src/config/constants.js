/**
 * Application configuration and constants
 */

export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Biomap',
  version: '1.0.0',
}

export const UI_CONFIG = {
  autoRefreshInterval: 30000, // 30 seconds
  animationDuration: 300, // milliseconds
  toastDuration: 5000, // 5 seconds
}

export const ROUTES = {
  home: '/',
  committees: '/committees',
  invited: '/invited',
  schedule: '/schedule',
  dates: '/dates',
  submission: '/submission',
  venue: '/venue',
  specialSession: '/special-session',
}
