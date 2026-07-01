const express = require("express");
const router = express.Router();

const notifications = require("../data/notifications");

// Get all notifications
router.get("/", (req, res) => {
    res.json(notifications);
});

// Get notification by ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const notification = notifications.find(n => n.id === id);

    if (!notification) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    res.json(notification);
});

// Mark notification as read
router.put("/:id/read", (req, res) => {
    const id = Number(req.params.id);

    const notification = notifications.find(n => n.id === id);

    if (!notification) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    notification.read = true;

    res.json({
        message: "Notification marked as read",
        notification
    });
});

module.exports = router;