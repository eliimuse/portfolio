# Soumeli Dasgupta — Portfolio

Portfolio website for Soumeli Dasgupta, full-stack developer moving into computer vision.

---

## 📁 Repository Structure

The project code is separated into clean, modular files without changing any original code:

```
├── index.html        # Main HTML markup
├── style.css         # Styling and design system
├── script.js         # Interactive behavior (GSAP ScrollTrigger & morph effect)
├── profile.jpg       # Profile photo asset
└── README.md         # Project documentation
```

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it with any static server:

```bash
# Using Python
python3 -m http.server 3000

# Or using npx
npx serve
```

---

## 📦 How to Upload to GitHub

1. **Initialize Git in this directory**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: separated portfolio files"
   ```

2. **Push to your GitHub repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Deploy with GitHub Pages**:
   - Go to your repository settings on GitHub: **Settings &rarr; Pages**.
   - Under **Branch**, select `main` and root (`/`), then click **Save**.
   - Your portfolio will be live at `https://<your-username>.github.io/<your-repo-name>/`.
