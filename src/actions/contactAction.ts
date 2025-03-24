"use server";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

// --- Server Action Section ---
// Define Mongoose Schema and Model for Contact
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite in development
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// Helper: Connect to MongoDB (using your env variable MONGODB_URI)
async function connectToDb() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI || "");
}

/**
 * Server Action to save the contact details.
 */
export async function saveContactAction(state: undefined, formData: FormData) {
  console.log("current state", state);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  await connectToDb();
  try {
    const newContact = new Contact({ name, phone, message });
    await newContact.save();
  } catch (error) {
    console.log("error", error);
    // if error occurs don't redirect it
    return undefined;
  }

  // Redirect after successful submission (adjust target as needed)
  redirect("/thank-you");
  return undefined;
}
