import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 80 },
    email: { type: String, required: true, maxlength: 120 },
    subject: { type: String, default: "Portfolio inquiry", maxlength: 120 },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

let Contact = null;

export function getContactModel() {
  if (!Contact) {
    throw new Error("Database not initialized");
  }
  return Contact;
}

export async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not set");
  }

  await mongoose.connect(mongoUri);

  Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

  return true;
}

export async function insertContact({ name, email, subject, message }) {
  const ContactModel = getContactModel();
  const contact = await ContactModel.create({ name, email, subject, message });
  return { id: contact._id, created_at: contact.created_at };
}
