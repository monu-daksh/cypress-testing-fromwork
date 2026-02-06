/**
 * Custom Cypress tasks
 * Tasks run in Node.js context and can perform operations
 * that aren't available in the browser
 * 
 * Future additions:
 * - Email verification tasks
 * - SMS verification tasks
 * - External API tasks
 */

import * as fs from 'fs';
import * as path from 'path';

export const tasks = {
  /**
   * Read file from filesystem
   */
  'file:read'(filepath: string): string | null {
    try {
      return fs.readFileSync(filepath, 'utf-8');
    } catch (error) {
      console.error('Error reading file:', error);
      return null;
    }
  },

  /**
   * Write file to filesystem
   */
  'file:write'({ filepath, content }: { filepath: string; content: string }): boolean {
    try {
      const dir = path.dirname(filepath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filepath, content, 'utf-8');
      return true;
    } catch (error) {
      console.error('Error writing file:', error);
      return false;
    }
  },

  /**
   * Delete file from filesystem
   */
  'file:delete'(filepath: string): boolean {
    try {
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  },

  /**
   * Generate random data
   */
  'data:generate'(type: string): any {
    const generators: Record<string, () => any> = {
      uuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      },
      email: () => `test.${Date.now()}@example.com`,
      timestamp: () => Date.now(),
    };

    return generators[type] ? generators[type]() : null;
  },

  /**
   * Wait/sleep task
   */
  'wait'(ms: number): null {
    return new Promise((resolve) => {
      setTimeout(() => resolve(null), ms);
    });
  },

  /**
   * Log with timestamp
   */
  'log:timestamp'(message: string): null {
    console.log(`[${new Date().toISOString()}] ${message}`);
    return null;
  },
};

export default tasks;