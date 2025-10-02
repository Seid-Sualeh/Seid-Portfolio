const db = require("../db");

// Save message to DB
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });
    }

    await db.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return res
      .status(201)
      .json({
        success: true,
        msg: "Message sent successfully! ✅ Thank you for your review ",
      });
  } catch (err) {
    console.error("Error saving message:", err.message);
    return res.status(500).json({ success: false, msg: "Server error" });
  }
};

module.exports = { sendMessage };
