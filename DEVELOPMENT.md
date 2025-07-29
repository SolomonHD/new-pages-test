# Development Guide

This enhanced GitHub Pages site is built with Jekyll and includes interactive features for bash commands.

## Quick Start

<div class="bash-command">
  <div class="command-header">
    <span class="command-title">Install dependencies</span>
    <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle install">Copy</button>
  </div>
  <pre><code class="language-bash">bundle install</code></pre>
</div>

<div class="bash-command">
  <div class="command-header">
    <span class="command-title">Serve site locally</span>
    <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle exec jekyll serve --livereload">Copy</button>
  </div>
  <pre><code class="language-bash">bundle exec jekyll serve --livereload</code></pre>
</div>

## Project Structure

```
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   └── head-custom.html    # Custom head includes
├── _layouts/               # Page layouts (inherited from theme)
├── _posts/                 # Blog posts
├── _sass/                  # Sass partials (inherited from theme)
├── assets/
│   ├── css/
│   │   └── style.scss      # Main stylesheet
│   └── js/
│       └── commands.js     # Interactive command functionality
├── src/                    # Source code organization
│   ├── components/         # Reusable components
│   ├── utils/             # Utility functions
│   └── styles/            # Additional styles
├── .github/workflows/      # GitHub Actions
└── pages/                  # Static pages
```

## Features

### Interactive Bash Commands

Every bash command block includes:
- **One-click copy functionality**: Click "Copy" to copy commands to clipboard
- **Visual feedback**: Button changes to "Copied!" with color change
- **Toast notifications**: Non-intrusive feedback when commands are copied
- **Keyboard support**: Use Ctrl+C when focused on a copy button

### Expandable Sections

Use `<details>` elements with the `expandable-section` class:

```html
<details class="expandable-section">
  <summary>🔧 Advanced Commands</summary>
  <!-- Command blocks go here -->
</details>
```

### Command Block Structure

```html
<div class="bash-command">
  <div class="command-header">
    <span class="command-title">Description of command</span>
    <button class="copy-btn" onclick="copyCommand(this)" data-command="actual-command">Copy</button>
  </div>
  <pre><code class="language-bash">actual-command</code></pre>
</div>
```

## Customization

### Themes

The site uses the Minima theme. To customize:

1. Override theme files by creating them in your project
2. Modify `assets/css/style.scss` for additional styles
3. Add custom layouts in `_layouts/`

### Adding New Command Categories

1. Create a new markdown file (e.g., `docker-commands.md`)
2. Add appropriate front matter
3. Use the command block structure shown above
4. Update navigation in `_config.yml` if needed

### JavaScript Enhancements

The `/src` folder contains modular JavaScript:

- `src/components/command-block.js`: Component for creating command blocks
- `src/utils/clipboard.js`: Enhanced clipboard functionality
- `src/utils/notifications.js`: Toast notification system

## Deployment

### GitHub Pages

The site auto-deploys via GitHub Actions when you push to main branch:

1. Ensure GitHub Pages is enabled in repository settings
2. Set source to "GitHub Actions"
3. Push changes to main branch

### Local Testing

<details class="expandable-section">
  <summary>🧪 Testing Commands</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Build site for production</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="JEKYLL_ENV=production bundle exec jekyll build">Copy</button>
    </div>
    <pre><code class="language-bash">JEKYLL_ENV=production bundle exec jekyll build</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Test built site locally</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="cd _site && python -m http.server 8000">Copy</button>
    </div>
    <pre><code class="language-bash">cd _site && python -m http.server 8000</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Check for broken links</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle exec htmlproofer _site --disable-external">Copy</button>
    </div>
    <pre><code class="language-bash">bundle exec htmlproofer _site --disable-external</code></pre>
  </div>
</details>

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

For questions or issues, please open a GitHub issue.