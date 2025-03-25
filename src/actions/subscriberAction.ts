"use server";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", schema);

const connectToDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI || "");
};

export const createSubscriber = async (state: boolean, formData: FormData) => {
  const email = formData.get("email");

  console.log(state);
  if (email) {
    await connectToDB();
    try {
      const subscriber = new Subscriber({ email });
      await subscriber.save();
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }
  return false;
};
