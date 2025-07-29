/**
 * Clipboard Utilities
 * Enhanced clipboard functionality with fallbacks
 */

export class ClipboardManager {
  static async copyText(text) {
    try {
      // Modern Clipboard API (requires HTTPS)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      
      // Fallback for older browsers
      return this.fallbackCopy(text);
    } catch (error) {
      console.error('Copy failed:', error);
      return this.fallbackCopy(text);
    }
  }

  static fallbackCopy(text) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return successful;
    } catch (error) {
      console.error('Fallback copy failed:', error);
      return false;
    }
  }

  static async readText() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        return await navigator.clipboard.readText();
      }
      throw new Error('Clipboard read not supported');
    } catch (error) {
      console.error('Read from clipboard failed:', error);
      return null;
    }
  }

  static isSupported() {
    return !!(navigator.clipboard || document.execCommand);
  }
}

// Legacy global function for backward compatibility
window.copyToClipboard = ClipboardManager.copyText;