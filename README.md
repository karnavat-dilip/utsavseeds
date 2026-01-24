# UTSAV SEEDS Pvt. Ltd. - Corporate Website

A professional, modern, and animated corporate website for UTSAV SEEDS Pvt. Ltd., a research-based agricultural seed company.

## 🚀 Features

- **Modern Design**: Premium, trustworthy, and farmer-friendly interface
- **Smooth Animations**: Powered by Framer Motion and AOS (Animate on Scroll)
- **Fully Responsive**: Works seamlessly on all devices
- **ReactJS**: Built with functional components only
- **Contact Form**: Backend API with email functionality

## 📁 Project Structure

```
my-website/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and static files
│   │   └── styles/        # CSS styles
│   └── package.json
├── api/               # Backend API
│   ├── contact.js     # Contact form endpoint
│   └── server.js      # Server setup
└── vercel.json        # Deployment configuration
```

## 🛠️ Technology Stack

### Frontend
- ReactJS (Functional Components)
- Framer Motion (Animations)
- AOS (Animate on Scroll)
- CSS3

### Backend
- Node.js
- Express.js
- Nodemailer (Email service)

## 📦 Installation

1. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd api
   npm install
   ```

3. **Or Install All at Once**
   ```bash
   npm run install-all
   ```

## ⚙️ Configuration

### Backend Email Setup

1. Update `api/contact.js` with your email credentials:
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with your Gmail App Password
   - Replace `admin@utsavseeds.com` with the admin email address

2. **For Gmail:**
   - Enable 2-Factor Authentication
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password (not your regular password)

3. **Environment Variables (Optional):**
   Create a `.env` file in the `api` folder:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@utsavseeds.com
   PORT=5000
   ```

## 🚀 Running the Application

### Development Mode

**Frontend:**
```bash
cd frontend
npm start
```
Runs on http://localhost:3000

**Backend:**
```bash
cd api
npm start
```
Runs on http://localhost:5000

### Production Build

```bash
cd frontend
npm run build
```

## 📧 Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+91-1234567890",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## 🌐 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured for deployment.

## 📝 Sections

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Full-screen hero section with animations
3. **About Us** - Company information and achievements
4. **Mission** - Company mission with animated icons
5. **Infrastructure** - Facilities and locations
6. **R&D** - Research and development timeline
7. **Contact** - Contact form with backend integration
8. **Footer** - Company information and links

## 🎨 Brand Colors

- Primary Blue: `#2196F3`
- Primary Green: `#4CAF50`
- Dark Blue: `#1976D2`
- Dark Green: `#388E3C`

## 📄 License

© 2024 UTSAV SEEDS Pvt. Ltd. All rights reserved.

## 👨‍💻 Development

Built with ❤️ for UTSAV SEEDS Pvt. Ltd.

---

**Note:** Make sure to configure the email settings in the backend before deploying to production.












