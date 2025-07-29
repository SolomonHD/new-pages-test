// Copy command functionality
async function copyCommand(button) {
  const command = button.getAttribute('data-command');
  
  // Add loading state
  button.classList.add('loading');
  
  try {
    // Use the modern Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(command);
      showCopyFeedback(button, command);
    } else {
      // Fallback for older browsers or non-HTTPS contexts
      const success = fallbackCopyTextToClipboard(command);
      if (success) {
        showCopyFeedback(button, command);
      } else {
        showCopyError(button);
      }
    }
  } catch (err) {
    // Fallback to older method
    console.warn('Modern clipboard API failed, trying fallback:', err);
    const success = fallbackCopyTextToClipboard(command);
    if (success) {
      showCopyFeedback(button, command);
    } else {
      showCopyError(button);
    }
  } finally {
    // Remove loading state
    button.classList.remove('loading');
  }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
    document.body.removeChild(textArea);
    return false;
  }
}

// Show visual feedback when command is copied
function showCopyFeedback(button, command) {
  const originalText = button.textContent;
  
  // Change button appearance
  button.textContent = 'Copied!';
  button.classList.add('copied');
  
  // Show toast notification
  showToast('Command copied to clipboard!');
  
  // Track the copy event (optional analytics)
  trackCommandCopy(command);
  
  // Reset button after 2 seconds
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('copied');
  }, 2000);
}

// Show error feedback when copy fails
function showCopyError(button) {
  const originalText = button.textContent;
  
  // Change button appearance
  button.textContent = 'Failed';
  button.classList.add('error');
  
  // Show error notification
  showToast('Failed to copy command', 'error');
  
  // Reset button after 3 seconds
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('error');
  }, 3000);
}

// Show toast notification
function showToast(message, type = 'success') {
  // Remove existing toast if any
  const existingToast = document.querySelector('.copy-toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create new toast
  const toast = document.createElement('div');
  toast.className = `copy-toast copy-toast-${type}`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add keyboard support for expandable sections
  const summaries = document.querySelectorAll('.expandable-section summary');
  summaries.forEach(summary => {
    summary.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Add copy keyboard shortcut (Ctrl+C when focused on copy button)
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c') {
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.classList.contains('copy-btn')) {
        e.preventDefault();
        copyCommand(focusedElement);
      }
    }
  });
});

// Add analytics for command copying (optional)
function trackCommandCopy(command) {
  // You can integrate with Google Analytics or other analytics services
  if (typeof gtag !== 'undefined') {
    gtag('event', 'copy_command', {
      'event_category': 'engagement',
      'event_label': command,
      'value': 1
    });
  }
}