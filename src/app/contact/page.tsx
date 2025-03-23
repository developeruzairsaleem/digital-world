// app/contact/page.jsx

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

// --- Client Component (Contact Page) ---
export default function ContactPage() {
  return (
    <>
      <div className="md:mx-auto p-2 max-w-[1100px]">
        <Navbar />
      </div>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in Touch with Digital World
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions, need a quote, or want to discuss your next
              project? We’d love to hear from you. Reach out and let us help you
              bring your ideas to life.
            </p>
          </div>
        </section>
        <div className="mx-auto p-2 py-12 max-w-[1100px]">
          <Form />
        </div>

        {/* Contact Details Section */}
        <section className="py-12  p-2 max-w-[1100px] mx-auto"></section>

        {/* Map / Additional Info (Optional) */}
        <section className="py-12  p-2 max-w-[1100px] mx-auto ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Find Us Here
            </h2>
            <p className="text-gray-600 mb-4">
              Visit our office at Main Khanna Road, Nizd Abdullah Masjjd,
              Khannapul, Rawalpindi, Pakistan, or connect with us over the
              phone.
            </p>
            {/* Optional: embed a Google Map iframe */}
            <div className="w-full h-64 mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212613.44393699119!2d72.92302077220648!3d33.62903640000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb073656a849%3A0x4134a2cde51b35f6!2sDigital%20World%20Printing%20Press!5e0!3m2!1sen!2s!4v1742760404831!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital World Printing press location"
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
