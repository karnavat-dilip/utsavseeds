# Group of Companies - Logo Setup

## Logo Files Required

Add these PNG logo files to `frontend/src/assets/` folder:

1. **udan-logo.png** - UDAN AGRO INDUSTRIES logo
2. **veer-logo.png** - VEER SEEDS logo
3. **logo.png** - UTSAV SEEDS logo (already exists)

## Steps to Add Logos

### Step 1: Add Logo Files
Place your logo PNG files in:
```
frontend/src/assets/
```

Recommended filenames:
- `udan-logo.png`
- `veer-logo.png`
- `utsav-logo.png` (or use existing `logo.png`)

### Step 2: Update Component
Open `frontend/src/components/GroupOfCompanies.jsx` and update the imports:

**Find these lines (around line 4-6):**
```javascript
// import udanLogo from '../assets/udan-logo.png';
// import veerLogo from '../assets/veer-logo.png';
import utsavLogo from '../assets/logo.png';
```

**Uncomment and update:**
```javascript
import udanLogo from '../assets/udan-logo.png';
import veerLogo from '../assets/veer-logo.png';
import utsavLogo from '../assets/logo.png';
```

**Then update the companies array (around line 8-20):**
```javascript
const companies = [
  {
    name: 'UDAN AGRO INDUSTRIES',
    logo: udanLogo,
    description: 'A vision of better works'
  },
  {
    name: 'VEER SEEDS',
    logo: veerLogo,
    description: 'Quality seeds for better yields'
  },
  {
    name: 'UTSAV SEEDS',
    logo: utsavLogo,
    description: 'Research-driven seed solutions'
  }
];
```

## Current Status

- Component is ready to use PNG logos
- Currently using placeholder images
- UTSAV logo is already connected (using existing logo.png)
- Just add UDAN and VEER logo files and update imports

## Logo Requirements

- Format: PNG (with transparent background recommended)
- Size: 200-300px width recommended
- Aspect Ratio: Any (will be auto-scaled)
- Background: Transparent preferred

After adding logos, the section will automatically display them!









