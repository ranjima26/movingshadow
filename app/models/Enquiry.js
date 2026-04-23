import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [50, "Your name cannot exceed 50 characters"]
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    subject: { type: String },
    message: { type: String, required: [true, "Message is required"] },
    createdAt: { type: Date, default: Date.now }
});

// Validate that at least one of email or phone is provided
enquirySchema.pre("validate", async function () {
    if (!this.email && !this.phone) {
        this.invalidate("email", "Please provide either an email address or phone number.");
    }
});

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
