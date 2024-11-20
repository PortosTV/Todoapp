const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://dimitricorreia526:dcs290305@cluster0.29dqvhk.mongodb.net/").then(() => {
        console.log("Connected")
    });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};
conn();