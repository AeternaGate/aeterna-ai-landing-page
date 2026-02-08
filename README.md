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

Aeterna AI is a professional landing page for AI services targeting small business owners, built with Node.js, Express, and EJS. The platform showcases advanced AI integration and product development services with an elegant interface featuring interactive elements and seamless user experience.

## ✨ Key Features

- 🌐 **Modern Responsive Design** - Fully responsive layout optimized for all device sizes
- 📋 **Contact Form Integration** - Direct connection to Google Sheets API
- ⚡ **Fast Loading Times** - Optimized for performance and user experience
- 🎨 **Clean UI/UX Design** - Professional layout optimized for conversions
- 🔒 **Secure Data Handling** - Proper validation and secure transmission of form data

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Server-side runtime environment |
| [Express.js](https://expressjs.com/) | Web application framework |
| [EJS](https://ejs.co/) | Embedded JavaScript templating |
| [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Client-side interactivity |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and responsive design |
| [Google Sheets API](https://developers.google.com/sheets) | Data collection and storage |

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
   ```

4. **Set up Google Service Account**
   Place your Google service account key in a file named `google-service-account.json` in the root directory of the project.

5. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

6. **Visit the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
aeterna-ai-landing-page/
├── server.js                    # Express server configuration
├── package.json                # Project metadata and dependencies
├── .env                        # Environment variables (not tracked)
├── google-service-account.json # Google service account credentials (not tracked)
├── .gitignore                  # Files and directories to ignore
├── README.md                   # Project documentation
├── src/
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css      # Main stylesheet with responsive design
│   │   └── js/
│   │       └── main.js        # Client-side JavaScript functionality
│   └── views/
│       ├── index.ejs          # Main landing page template
│       └── contact.ejs        # Contact form page template
└── node_modules/              # Dependencies (not tracked)
```

## 🔧 Key Functionality

### Contact Form Integration
- Form validation and submission handling
- Direct integration with Google Sheets API
- Secure data transmission with environment-based configuration
- Success/error messaging for user feedback

### Responsive Design
- Mobile-first approach with media queries
- Flexible layouts using CSS Grid and Flexbox
- Optimized touch targets for mobile devices
- Consistent experience across all screen sizes

### Data Handling
- Secure processing of form submissions
- Proper validation of required fields
- Error handling for API failures
- Logging of form data for debugging purposes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please contact the Aeterna AI team.

---

<p align="center">
  Made with ❤️ by the Aeterna Gate
</p>
