// import Footer from "@/components/Footer";
import Link from "next/link";

// app/thank-you/page.jsx
export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center ">
      <div className="text-center px-4 py-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Your message has been successfully sent. We appreciate your interest
          and will get back to you soon.
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-800 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-pink-900 transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
