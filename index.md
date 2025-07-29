---
layout: home
title: Home
---

# Enhanced GitHub Pages Demo

Welcome to our enhanced GitHub Pages site built with Jekyll! This site demonstrates:

- 🎨 **Beautiful Jekyll themes** with the Minima theme
- 💻 **Interactive bash commands** with one-click copy functionality
- 📁 **Expandable command sections** to keep content organized
- 🚀 **Modern web features** for better user experience

## Quick Start Commands

<div class="command-section">
  <h3>Basic Git Commands</h3>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Initialize a new repository</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git init">Copy</button>
    </div>
    <pre><code class="language-bash">git init</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Add all files to staging</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git add .">Copy</button>
    </div>
    <pre><code class="language-bash">git add .</code></pre>
  </div>
</div>

<details class="expandable-section">
  <summary>🔧 Advanced Git Commands (Click to expand)</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Interactive rebase last 3 commits</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git rebase -i HEAD~3">Copy</button>
    </div>
    <pre><code class="language-bash">git rebase -i HEAD~3</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Show detailed commit history</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git log --oneline --graph --decorate --all">Copy</button>
    </div>
    <pre><code class="language-bash">git log --oneline --graph --decorate --all</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Stash with message</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git stash push -m &quot;work in progress&quot;">Copy</button>
    </div>
    <pre><code class="language-bash">git stash push -m "work in progress"</code></pre>
  </div>
</details>

## Features

- **One-click copy**: Click any "Copy" button to copy commands to your clipboard
- **Expandable sections**: Click on collapsed sections to reveal more commands
- **Syntax highlighting**: All code blocks have proper syntax highlighting
- **Responsive design**: Works great on desktop and mobile devices

[View all commands →](/commands)