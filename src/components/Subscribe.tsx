"use client";

import { createSubscriber } from "@/actions/subscriberAction";
import { useActionState } from "react";

export default function Subscribe() {
  const [state, formAction, pending] = useActionState(createSubscriber, false);

  return (
    <form action={formAction} className="flex">
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        className="w-full px-4 py-2 rounded-l-md border border-gray-100 mr-2 focus:outline-none text-white-900"
        required
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-indigo-600 disabled:bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md"
      >
        {pending ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
