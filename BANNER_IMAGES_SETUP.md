# Hero Banner Images Setup

## How to Add Your Banner Images

### Step 1: Add Images to Assets Folder
1. Place your 2 banner images in: `frontend/src/assets/`
2. Recommended naming:
   - `banner1.jpg` (or `.png`, `.webp`)
   - `banner2.jpg` (or `.png`, `.webp`)

### Step 2: Update HeroBanner Component
Open `frontend/src/components/HeroBanner.jsx` and update the imports:

**Replace this section:**
```javascript
// Banner images - Add your images to assets folder and import here
// Example: import bannerImage1 from '../assets/banner1.jpg';
// Example: import bannerImage2 from '../assets/banner2.jpg';
```

**With your actual imports:**
```javascript
import bannerImage1 from '../assets/banner1.jpg';
import bannerImage2 from '../assets/banner2.jpg';
```

**Then update the bannerImages array:**
```javascript
const bannerImages = [bannerImage1, bannerImage2];
```

### Step 3: Image Recommendations
- **Format**: JPG, PNG, or WebP
- **Size**: 1920x1080px or larger (will be optimized automatically)
- **Aspect Ratio**: 16:9 recommended
- **File Size**: Keep under 500KB per image for best performance
- **Content**: Agriculture/seed-related images work best

### Current Setup
The banner is currently using placeholder gradients. Once you add your images and update the imports, the slider will automatically use your images.

### Testing
After adding images:
1. Save the file
2. The development server will hot-reload
3. Check the homepage to see your images in the slider










