# Enhanced GitHub Pages Site

A sophisticated Jekyll-powered GitHub Pages site featuring interactive bash commands, expandable sections, and modern web functionality.

## ✨ Features

- **🎨 Jekyll Theme Integration**: Built with the Minima theme for clean, responsive design
- **💻 Interactive Command Blocks**: One-click copy functionality for all bash commands
- **📁 Expandable Sections**: Collapsible command groups to reduce visual clutter
- **🔧 Advanced JavaScript**: Modular ES6 components with fallback support
- **📱 Mobile Responsive**: Works seamlessly on desktop and mobile devices
- **⚡ GitHub Actions**: Automated deployment with Jekyll build process

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd new-pages-test
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Visit** `http://localhost:4000`

## 📁 Project Structure

```
├── _config.yml              # Jekyll configuration
├── _includes/               # Custom head includes
├── _posts/                  # Blog posts with command examples
├── assets/
│   ├── css/style.scss       # Enhanced styling with command blocks
│   └── js/commands.js       # Interactive functionality
├── src/                     # Organized source code
│   ├── components/          # Reusable JS components
│   ├── utils/               # Utility functions
│   └── styles/              # Additional SCSS
├── .github/workflows/       # Auto-deployment
└── pages/                   # Static content
```

## 🎯 Interactive Features

### Command Blocks
Each bash command includes:
- One-click copy to clipboard
- Visual feedback (button changes to "Copied!")
- Toast notifications
- Loading states and error handling

### Expandable Sections
- Click to expand/collapse advanced commands
- Keyboard navigation support
- Smooth animations and transitions

## 🛠️ Technology Stack

- **Jekyll** - Static site generator
- **Minima Theme** - Clean, responsive design
- **SCSS** - Enhanced stylesheet with custom components
- **Vanilla JavaScript** - No framework dependencies
- **GitHub Actions** - Automated CI/CD
- **GitHub Pages** - Free hosting

## 📖 Usage Examples

The site includes comprehensive examples of:
- Git workflows and advanced commands
- Docker container management
- Node.js development commands
- System administration tasks

## 🔧 Customization

See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed customization instructions including:
- Adding new command categories
- Modifying themes and styles
- Creating custom components
- Advanced Jekyll configuration

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the main branch. No additional configuration required!

## 📝 License

MIT License - feel free to use this as a template for your own projects.