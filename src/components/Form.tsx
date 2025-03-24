"use client";
import { saveContactAction } from "@/actions/contactAction";
import { useActionState } from "react";

export default function Form() {
  const initialState = undefined;

  const [state, formAction, pending] = useActionState(
    saveContactAction,
    initialState
  );
  console.log(state);
  return (
    <form
      action={formAction}
      className="max-w-xl mx-auto bg-white text-left rounded-lg p-8 shadow-2xl"
    >
      <div className="mb-4">
        <h3 className="text-xl text-pink-800 font-bold my-5">
          Fill Your Details
        </h3>
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-800"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 font-semibold mb-2"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          required
          name="phone"
          placeholder="Your Phone Number"
          className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-800"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message"
          className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-800"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-pink-800 disabled:bg-pink-600 text-white font-semibold py-3 px-4 rounded hover:bg-pink-900 transition duration-300"
      >
        {pending ? "Submitting" : "Submit"}
      </button>
    </form>
  );
}
