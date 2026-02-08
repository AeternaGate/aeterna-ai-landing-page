# Aeterna AI Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/Aeterna-AI-blueviolet?style=for-the-badge" alt="Aeterna AI">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

<p align="center">
  <em>Transform your business with cutting-edge AI solutions designed for small businesses</em>
</p>

---

## 🚀 Overview

Aeterna AI is a professional landing page for AI services targeting small business owners, built with Node.js, Express, and EJS. The platform showcases advanced AI integration and product development services with an elegant dark-themed interface featuring interactive elements and seamless user experience.

## ✨ Key Features

- 🔥 **Premium Dark Mode Design** - Elegant dark theme with emerald green accents
- 🧠 **Interactive Neural Field Animation** - Dynamic canvas-based background animation
- 📋 **Split Service Catalog** - Interactive panels for AI Integration and Product Development
- ⏳ **Horizontal Methodology Timeline** - Visual representation of our 4-step process
- 📈 **Success Stories Section** - Expandable cards showcasing ROI metrics
- 📞 **Integrated Contact Form** - Direct connection to Google Sheets API
- 📱 **Fully Responsive Design** - Optimized for all device sizes
- ⚡ **Smooth Navigation** - Enhanced scrolling and transition effects

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Server-side runtime environment |
| [Express.js](https://expressjs.com/) | Web application framework |
| [EJS](https://ejs.co/) | Embedded JavaScript templating |
| [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Client-side interactivity |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and animations |
| [Google Sheets API](https://developers.google.com/sheets) | Data collection and storage |

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Mode | `#121212` | Primary background |
| Emerald Accent | `#00C853` | Highlights and CTAs |
| Light Gray | `#E0E0E0` | Primary text |
| Medium Gray | `#9E9E9E` | Secondary text |

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aeterna-ai-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following:
   ```env
   GOOGLE_SHEET_ID=your_google_sheet_id_here
   GOOGLE_SERVICE_ACCOUNT_KEY={"type": "service_account", ...}
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

5. **Visit the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
aeterna-ai-landing-page/
├── server.js                 # Express server configuration
├── package.json             # Project metadata and dependencies
├── .env                     # Environment variables (not tracked)
├── .gitignore              # Files and directories to ignore
├── README.md               # Project documentation
├── src/
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css   # Main stylesheet with responsive design
│   │   └── js/
│   │       └── main.js     # Client-side JavaScript functionality
│   └── views/
│       ├── index.ejs       # Main landing page template
│       └── contact.ejs     # Contact form page template
└── node_modules/           # Dependencies (not tracked)
```

## 🔧 Key Functionality

### Neural Field Animation
Dynamic canvas-based background that simulates neural networks with moving nodes and connecting lines.

### Interactive Elements
- Hover effects on service panels that highlight complementary options
- Expandable success story cards for detailed insights
- Horizontal scrollable methodology timeline
- Smooth scrolling navigation between sections

### Contact Form Integration
- Form validation and submission handling
- Direct integration with Google Sheets API
- Secure data transmission with environment-based configuration

### Responsive Design
- Mobile-first approach with media queries
- Flexible layouts using CSS Grid and Flexbox
- Optimized touch targets for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please contact the Aeterna AI team at [support@aeternai.com](mailto:support@aeternai.com)

---

<p align="center">
  Made with ❤️ by the Aeterna AI Team
</p>