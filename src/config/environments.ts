/**
 * Environment-specific configurations
 * 
 * Future additions:
 * - Cloud environment configs
 * - CI/CD specific settings
 * - Feature flags per environment
 */

export interface EnvironmentConfig {
  name: string;
  baseUrl: string;
  apiUrl: string;
  timeout: number;
  retries: number;
  video: boolean;
}

export const environments = {
  local: {
    name: 'local',
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:4000',
    timeout: 10000,
    retries: 0,
    video: false,
  },
  
  development: {
    name: 'development',
    baseUrl: 'https://dev.example.com',
    apiUrl: 'https://api-dev.example.com',
    timeout: 15000,
    retries: 1,
    video: true,
  },
  
  staging: {
    name: 'staging',
    baseUrl: 'https://staging.example.com',
    apiUrl: 'https://api-staging.example.com',
    timeout: 15000,
    retries: 2,
    video: true,
  },
  
  production: {
    name: 'production',
    baseUrl: 'https://example.com',
    apiUrl: 'https://api.example.com',
    timeout: 20000,
    retries: 3,
    video: true,
  },
  
  ci: {
    name: 'ci',
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:4000',
    timeout: 30000,
    retries: 3,
    video: true,
  },
};

/**
 * Get environment config
 */
export const getEnvironmentConfig = (
  envName: keyof typeof environments = 'local'
): EnvironmentConfig => {
  return environments[envName];
};

/**
 * Apply environment config to Cypress
 */
export const applyEnvironmentConfig = (
  envName: keyof typeof environments = 'local'
): void => {
  const config = getEnvironmentConfig(envName);
  
  Cypress.config('baseUrl', config.baseUrl);
  Cypress.config('defaultCommandTimeout', config.timeout);
  // Cypress.config('video', config.video);
  
  Cypress.env('apiUrl', config.apiUrl);
  Cypress.env('environment', config.name);
};

export default environments;