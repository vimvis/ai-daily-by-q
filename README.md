# AI Daily by Q

A sophisticated AI news briefing archive for 형규형.

## 🌐 Website

After deployment: `https://hyungkyu.github.io/ai-daily-by-q/`

## ✨ Design Philosophy

- **Dark, editorial aesthetic** — Inspired by premium publications
- **Gold accent (#c9a962)** — Sophisticated, luxurious feel
- **Cormorant Garamond serif** — Editorial typography
- **Grain texture overlay** — Film-like, premium texture
- **Minimalist layout** — Content-first design

## 📁 Structure

```
ai-daily-by-q/
├── index.html              # Main page with today's briefing
├── style.css               # Dark editorial styling
├── script.js               # Dynamic content loader
├── archive.json            # Archive index
├── README.md               # This file
└── 2026-03-05/             # Daily content folders
    ├── summary.json        # 5-headline brief
    ├── report.html         # Full analysis
    ├── podcast.html        # Audio episode page
    └── podcast.mp3         # Audio file
```

## 🚀 Deploy to GitHub Pages

### 1. Create Repository
- Name: `ai-daily-by-q`
- Visibility: Public

### 2. Upload Files
```bash
git init
git add .
git commit -m "Initial launch"
git remote add origin https://github.com/hyungkyu/ai-daily-by-q.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Settings → Pages
- Source: Deploy from branch
- Branch: main / (root)
- Save

### 4. Access
Visit: `https://hyungkyu.github.io/ai-daily-by-q/`

## 🔄 Daily Update Workflow

### For Manual Updates
1. Create new folder: `mkdir 2026-03-06`
2. Add files: `summary.json`, `report.html`, `podcast.html`, `podcast.mp3`
3. Update `archive.json`
4. Commit and push

### For Automated Updates (Future)
GitHub Actions can be configured to automatically update content daily at 7 AM.

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --bg: #0a0a0b;           /* Background */
    --text: #f5f5f5;         /* Main text */
    --accent: #c9a962;       /* Gold accent */
    --text-secondary: #888888; /* Muted text */
}
```

### Typography
- Headlines: Cormorant Garamond (serif)
- Body: Inter + Noto Sans KR

## 📱 Mobile Responsive

All pages are fully responsive and optimized for mobile reading.

## 🔒 License

Private archive for 형규형. Created by 모아 AI.

---

*AI Daily by Q — Intelligence, elevated.*