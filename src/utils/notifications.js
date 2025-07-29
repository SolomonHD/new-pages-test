/**
 * Notification System
 * Handles toast notifications and user feedback
 */

export class NotificationManager {
  static show(message, type = 'success', duration = 3000) {
    const notification = this.create(message, type);
    document.body.appendChild(notification);
    
    // Trigger animation
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });

    // Auto-remove after duration
    setTimeout(() => {
      this.remove(notification);
    }, duration);

    return notification;
  }

  static create(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;

    // Add styles if not already present
    this.injectStyles();

    return notification;
  }

  static remove(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  static injectStyles() {
    if (document.querySelector('#notification-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 300px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        z-index: 1000;
        border-left: 4px solid #1a7f37;
      }

      .notification.show {
        opacity: 1;
        transform: translateY(0);
      }

      .notification-success {
        border-left-color: #1a7f37;
      }

      .notification-error {
        border-left-color: #d73a49;
      }

      .notification-warning {
        border-left-color: #f66a0a;
      }

      .notification-info {
        border-left-color: #0969da;
      }

      .notification-content {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .notification-message {
        color: #24292e;
        font-size: 14px;
        font-weight: 500;
      }

      .notification-close {
        background: none;
        border: none;
        font-size: 18px;
        color: #586069;
        cursor: pointer;
        margin-left: 12px;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .notification-close:hover {
        color: #24292e;
      }

      @media (max-width: 768px) {
        .notification {
          right: 10px;
          left: 10px;
          max-width: none;
        }
      }
    `;

    document.head.appendChild(styles);
  }

  static success(message, duration) {
    return this.show(message, 'success', duration);
  }

  static error(message, duration) {
    return this.show(message, 'error', duration);
  }

  static warning(message, duration) {
    return this.show(message, 'warning', duration);
  }

  static info(message, duration) {
    return this.show(message, 'info', duration);
  }
}

// Global notification functions
window.showNotification = NotificationManager.show.bind(NotificationManager);
window.showSuccess = NotificationManager.success.bind(NotificationManager);
window.showError = NotificationManager.error.bind(NotificationManager);