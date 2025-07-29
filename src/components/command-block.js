/**
 * Command Block Component
 * Creates interactive command blocks with copy functionality
 */

class CommandBlock {
  constructor(element) {
    this.element = element;
    this.command = element.getAttribute('data-command');
    this.title = element.getAttribute('data-title') || 'Command';
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.element.innerHTML = `
      <div class="bash-command">
        <div class="command-header">
          <span class="command-title">${this.title}</span>
          <button class="copy-btn" data-command="${this.command}">Copy</button>
        </div>
        <pre><code class="language-bash">${this.command}</code></pre>
      </div>
    `;
  }

  attachEventListeners() {
    const copyBtn = this.element.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
      copyCommand(copyBtn);
    });
  }

  static initAll() {
    const commandElements = document.querySelectorAll('[data-command-block]');
    commandElements.forEach(element => {
      new CommandBlock(element);
    });
  }
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', CommandBlock.initAll);
} else {
  CommandBlock.initAll();
}