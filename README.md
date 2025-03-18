# Modern Developer CV Template

A clean, modern, and responsive CV/Resume template built with HTML, CSS, and JavaScript. Perfect for developers looking to showcase their professional experience and technical skills.

🔗 [View Demo](https://meca1.github.io/cv/)

## ✨ Features

- 🎨 Clean and modern design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖨 Print-optimized layout
- 🎯 Sections for:
  - Professional Summary
  - Technical Skills
  - Professional Experience
  - Notable Projects
  - Education
- 🛠 Technical features:
  - No framework dependencies
  - Custom CSS Grid layout
  - Print-friendly styles
  - Easy to customize

## 🚀 Getting Started

1. Clone this repository:
```bash
git clone https://github.com/meca1/cv.git
```

2. Open `index.html` in your browser to view the template

3. Edit `src/js/app.js` to update your personal information:
   - Update the `resumeData` object with your details
   - Customize sections as needed
   - Add/remove skills and experiences

4. Customize styles in `src/styles/main.css` if desired

## 📋 Template Structure

```
├── index.html              # Main HTML file
├── src/
│   ├── js/
│   │   └── app.js         # Resume data and functionality
│   └── styles/
│       └── main.css       # Styles and print layout
└── README.md
```

## 🎨 Customization

### Adding Your Information
Edit the `resumeData` object in `src/js/app.js`:

```javascript
const resumeData = {
  name: "Your Name",
  role: "Your Role",
  contact: {
    // Your contact information
  },
  sections: {
    // Your sections data
  }
};
```

### Modifying Styles
The template uses a modular CSS structure. Main sections include:
- Header styles
- Section styles
- Skills grid
- Experience timeline
- Print optimization
- Responsive design

## 🖨 Printing

The template is optimized for printing:
1. Click the "Print Resume" button or use browser print (Ctrl/Cmd + P)
2. Ensure "Background Graphics" is enabled for best results

## 📱 Responsive Design

The template is fully responsive with breakpoints for:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🤝 Contributing

Feel free to:
- Fork the repository
- Create a feature branch
- Submit pull requests
- Open issues for bugs or suggestions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Original design inspired by modern resume trends

---

Made with ❤️ for the developer community 