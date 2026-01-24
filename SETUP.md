# Setup Guide - UTSAV SEEDS Website

## Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../api
npm install
```

### 2. Configure Email (Backend)

Before running the backend, you need to configure email settings:

1. **Open** `api/contact.js`
2. **Find** these lines (around line 12-16):
   ```javascript
   auth: {
     user: process.env.EMAIL_USER || 'your-email@gmail.com',
     pass: process.env.EMAIL_PASS || 'your-app-password'
   }
   ```
3. **Replace** with your email credentials

#### For Gmail Users:

1. Enable **2-Factor Authentication** on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an **App Password** (not your regular password!)
4. Use the App Password in the configuration

#### Alternative: Use Environment Variables

Create a `.env` file in the `api` folder:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@utsavseeds.com
PORT=5000
```

### 3. Update Admin Email

In `api/contact.js`, find:
```javascript
to: process.env.ADMIN_EMAIL || 'admin@utsavseeds.com',
```

Replace with your actual admin email address.

### 4. Run the Application

**Terminal 1 - Frontend:**
```bash
cd frontend
npm start
```
Opens at: http://localhost:3000

**Terminal 2 - Backend:**
```bash
cd api
npm start
```
Runs at: http://localhost:5000

### 5. Test Contact Form

1. Navigate to the Contact section
2. Fill out the form
3. Submit and check your email inbox

## Production Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `ADMIN_EMAIL`
4. Deploy!

The `vercel.json` is already configured.

## Troubleshooting

### Email Not Sending?

1. Check email credentials are correct
2. For Gmail: Make sure you're using App Password, not regular password
3. Check spam folder
4. Verify backend is running (check terminal for errors)

### API Connection Error?

1. Make sure backend is running on port 5000
2. Check CORS settings in `api/contact.js`
3. For production, ensure API URL is correct

### Build Errors?

1. Make sure all dependencies are installed
2. Check Node.js version (should be 14+)
3. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Need Help?

Check the main README.md for more details.












