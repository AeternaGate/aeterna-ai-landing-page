const express = require("express");
const path = require("path");
const { google } = require("googleapis");
const app = express();
const PORT = process.env.PORT || 3000;

// Import environment variables
require("dotenv").config();

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "src/public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// API endpoint to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    // Append data to Google Sheet
    await appendToGoogleSheet([
      new Date().toISOString(),
      name,
      email,
      company || "",
      phone || "",
      service || "",
      message,
    ]);

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again." });
  }
});

// Helper function to append data to Google Sheet
async function appendToGoogleSheet(row) {
  // Check if required environment variables are set
  if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    throw new Error("Missing Google Sheets configuration");
  }

  // Parse the service account key from environment variable
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

  // Authenticate with Google Sheets API
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Append the row to the Google Sheet
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "A1", // This will append to the next available row
    valueInputOption: "RAW",
    resource: {
      values: [row],
    },
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
