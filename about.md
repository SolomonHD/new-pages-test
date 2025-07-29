---
layout: page
title: About
permalink: /about/
---

# About This Site

This enhanced GitHub Pages site demonstrates modern web development practices using Jekyll, one of the most popular static site generators.

## Features

### 🎨 Jekyll Theme Integration
- Uses the **Minima** theme for clean, responsive design
- Easily customizable with SCSS variables
- Mobile-first responsive layout

### 💻 Interactive Command Sections
- One-click copy functionality for all bash commands
- Clean, syntax-highlighted code blocks
- Organized command categories

### 📁 Expandable Content
- Collapsible sections to reduce visual clutter
- Progressive disclosure of advanced commands
- Better content organization

## Technology Stack

<div class="bash-command">
  <div class="command-header">
    <span class="command-title">Check Jekyll version</span>
    <button class="copy-btn" onclick="copyCommand(this)" data-command="jekyll --version">Copy</button>
  </div>
  <pre><code class="language-bash">jekyll --version</code></pre>
</div>

<details class="expandable-section">
  <summary>🛠️ Development Commands</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Serve site locally</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle exec jekyll serve">Copy</button>
    </div>
    <pre><code class="language-bash">bundle exec jekyll serve</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Build site for production</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle exec jekyll build">Copy</button>
    </div>
    <pre><code class="language-bash">bundle exec jekyll build</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Install dependencies</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="bundle install">Copy</button>
    </div>
    <pre><code class="language-bash">bundle install</code></pre>
  </div>
</details>

## File Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _sass/              # Stylesheet partials
├── assets/             # CSS, JS, images
├── _posts/             # Blog posts
├── index.md            # Homepage
├── about.md            # About page
└── commands.md         # Commands reference
```

Built with ❤️ using Jekyll and GitHub Pages.