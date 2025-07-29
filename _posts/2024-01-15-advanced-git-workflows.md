---
layout: post
title: "Advanced Git Workflows for Developers"
date: 2024-01-15 10:00:00 -0000
categories: git development
---

# Advanced Git Workflows for Developers

Git is more than just `add`, `commit`, and `push`. Here are some advanced workflows that can improve your development process.

## Feature Branch Workflow

<div class="command-section">
  <h3>Creating and Managing Feature Branches</h3>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Create and switch to new feature branch</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git checkout -b feature/user-authentication">Copy</button>
    </div>
    <pre><code class="language-bash">git checkout -b feature/user-authentication</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Push feature branch to remote</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git push -u origin feature/user-authentication">Copy</button>
    </div>
    <pre><code class="language-bash">git push -u origin feature/user-authentication</code></pre>
  </div>
</div>

<details class="expandable-section">
  <summary>🔄 Advanced Branch Management</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Interactive rebase to clean up commits</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git rebase -i HEAD~3">Copy</button>
    </div>
    <pre><code class="language-bash">git rebase -i HEAD~3</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Squash last 3 commits into one</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git reset --soft HEAD~3 && git commit -m 'Implement user authentication feature'">Copy</button>
    </div>
    <pre><code class="language-bash">git reset --soft HEAD~3 && git commit -m "Implement user authentication feature"</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Cherry-pick specific commit to current branch</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git cherry-pick abc123">Copy</button>
    </div>
    <pre><code class="language-bash">git cherry-pick abc123</code></pre>
  </div>
</details>

## Git Hooks and Automation

Git hooks can automate your workflow and enforce code quality standards.

<details class="expandable-section">
  <summary>🪝 Setting Up Git Hooks</summary>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Create pre-commit hook for linting</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="echo '#!/bin/sh\nnpm run lint' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit">Copy</button>
    </div>
    <pre><code class="language-bash">echo '#!/bin/sh
npm run lint' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Create commit-msg hook for conventional commits</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="echo '#!/bin/sh\ncommit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+'\nif ! grep -qE \"$commit_regex\" \"$1\"; then\n    echo \"Invalid commit message format\"\n    exit 1\nfi' > .git/hooks/commit-msg && chmod +x .git/hooks/commit-msg">Copy</button>
    </div>
    <pre><code class="language-bash">echo '#!/bin/sh
commit_regex="^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+"
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format"
    exit 1
fi' > .git/hooks/commit-msg && chmod +x .git/hooks/commit-msg</code></pre>
  </div>
</details>

## Troubleshooting Common Issues

<div class="command-section highlighted">
  <h3>Emergency Git Commands</h3>
  
  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Undo last commit but keep changes</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git reset --soft HEAD~1">Copy</button>
    </div>
    <pre><code class="language-bash">git reset --soft HEAD~1</code></pre>
  </div>

  <div class="bash-command">
    <div class="command-header">
      <span class="command-title">Recover deleted branch</span>
      <button class="copy-btn" onclick="copyCommand(this)" data-command="git reflog show --all | grep 'branch-name'">Copy</button>
    </div>
    <pre><code class="language-bash">git reflog show --all | grep "branch-name"</code></pre>
  </div>
</div>

These advanced Git workflows will help you maintain a cleaner commit history and collaborate more effectively with your team.