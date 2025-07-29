---
layout: page
title: Commands
permalink: /commands/
---

# Command Reference

This page contains various useful commands organized by category.

## Docker Commands

<div class="command-section">
  <h3>Container Management</h3>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">List running containers</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="docker ps">Copy</button>
    </div>
    <pre><code class="language-bash">docker ps</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Stop all containers</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="docker stop $(docker ps -aq)">Copy</button>
    </div>
    <pre><code class="language-bash">docker stop $(docker ps -aq)</code></pre>
  </div>
</div>

<details class="expandable-section">
  <summary>🐳 Advanced Docker Commands</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Remove all unused containers, networks, images</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="docker system prune -a">Copy</button>
    </div>
    <pre><code class="language-bash">docker system prune -a</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Build image with specific tag</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="docker build -t myapp:latest .">Copy</button>
    </div>
    <pre><code class="language-bash">docker build -t myapp:latest .</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Run container with volume mount</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="docker run -v $(pwd):/app -p 3000:3000 myapp">Copy</button>
    </div>
    <pre><code class="language-bash">docker run -v $(pwd):/app -p 3000:3000 myapp</code></pre>
  </div>
</details>

## Node.js Commands

<div class="command-section">
  <h3>Package Management</h3>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Install dependencies</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="npm install">Copy</button>
    </div>
    <pre><code class="language-bash">npm install</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Start development server</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="npm run dev">Copy</button>
    </div>
    <pre><code class="language-bash">npm run dev</code></pre>
  </div>
</div>

<details class="expandable-section">
  <summary>📦 Advanced Node.js Commands</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Check for outdated packages</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="npm outdated">Copy</button>
    </div>
    <pre><code class="language-bash">npm outdated</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Audit for vulnerabilities</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="npm audit fix">Copy</button>
    </div>
    <pre><code class="language-bash">npm audit fix</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Clean install (remove node_modules first)</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="rm -rf node_modules package-lock.json && npm install">Copy</button>
    </div>
    <pre><code class="language-bash">rm -rf node_modules package-lock.json && npm install</code></pre>
  </div>
</details>

## System Administration

<details class="expandable-section">
  <summary>🖥️ System Commands</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Check disk usage</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="df -h">Copy</button>
    </div>
    <pre><code class="language-bash">df -h</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Find large files</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="find . -type f -size +100M -exec ls -lh {} \;">Copy</button>
    </div>
    <pre><code class="language-bash">find . -type f -size +100M -exec ls -lh {} \;</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Monitor system resources</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="htop">Copy</button>
    </div>
    <pre><code class="language-bash">htop</code></pre>
  </div>
</details>