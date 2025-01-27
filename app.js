// Import required modules
const express = require("express");
const path = require("path");

// Initialize the app
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Array to store messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

// New message form route
app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Handle form submission
app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
