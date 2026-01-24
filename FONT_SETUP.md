# Calisga Regular Font Setup

## Font File Installation

### Step 1: Download Font
Download Calisga Regular font from:
- [MyFonts](https://www.myfonts.com/products/regular-calisga-383253)
- Or from your font source

### Step 2: Add Font Files
1. Create a `fonts` folder in `frontend/public/` directory:
   ```
   frontend/public/fonts/
   ```

2. Place the font files in the fonts folder:
   - `Calisga-Regular.ttf` (or)
   - `Calisga-Regular.woff` (or)
   - `Calisga-Regular.woff2`

### Step 3: Enable Font in CSS
1. Open `frontend/src/styles/main.css`
2. Find the commented `@font-face` declaration (around line 5-14)
3. Uncomment it by removing `/*` and `*/`

The font will automatically be applied to:
- "Utsav Beej Uttam Beej" subtitle in hero banner

**Current Status:** Font-face is commented out to prevent build errors until font file is added.

### Step 4: Verify
After adding the font file, restart the development server:
```bash
npm start
```

The subtitle should now display in Calisga Regular font.

## Note
- Font file formats supported: TTF, WOFF, WOFF2
- If font file is not found, it will fallback to serif font
- Make sure font file name matches exactly: `Calisga-Regular.ttf`

