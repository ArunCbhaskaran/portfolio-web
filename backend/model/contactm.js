import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true,
        unique: true,
        match: /\S+@\S+\.\S+/
    },
    message: {
        type: String,
        required: true
    }
});

export default mongoose.model("contact", contactschema);
