# How to Update the Logo

## Steps to Replace the Logo

1. **Place your new logo file** in the `frontend/src/assets/` folder
2. **Name it `logo.png`** (or update the import statements if using a different name/format)
3. **Supported formats**: PNG (recommended for transparency), JPG, SVG

## Current Logo Usage

The logo is used in:
- **Navbar** (top navigation) - Height: 50px
- **Footer** - Height: 80px

## File Locations

- Logo file: `frontend/src/assets/logo.png`
- Navbar component: `frontend/src/components/Navbar.jsx` (line 4)
- Footer component: `frontend/src/components/Footer.jsx` (line 4)

## CSS Styling

The logo already has:
- Transparent background support
- Responsive sizing
- Hover animations

## Quick Replace Command

If you have the new logo file on your Desktop, you can run:

```powershell
Copy-Item "C:\Users\Vinod Patel.THIS-PC\OneDrive\Desktop\[YOUR_LOGO_FILE]" -Destination "C:\Users\Vinod Patel.THIS-PC\OneDrive\Desktop\my-website\frontend\src\assets\logo.png" -Force
```

Replace `[YOUR_LOGO_FILE]` with your actual logo filename.












