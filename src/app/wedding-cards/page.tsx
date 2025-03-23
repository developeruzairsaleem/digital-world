import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// app/services/wedding-cards/page.jsx
export default function WeddingCardsPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className=" bg-white h-screen p-2 max-w-[1100px] mx-auto">
        <Navbar />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mt-7 font-bold text-gray-800 mb-4">
            Exquisite Wedding Card Designs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            At Digital World, we transform your love story into beautifully
            crafted wedding cards. Our unique designs, quality printing, and
            attention to detail ensure that your special day is celebrated in
            style.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-800 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-pink-900 transition duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Our Wedding Cards Stand Out
              </h2>
              <p className="text-gray-600 mb-4">
                Our wedding card service combines traditional elegance with
                modern design. We offer fully customizable options—from layout
                and typography to color schemes and embellishments— ensuring
                your invitation is a true reflection of your personality.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Custom Designs Tailored to Your Theme</li>
                <li>High-Quality, Durable Materials</li>
                <li>Advanced Printing Technology for Vivid Colors</li>
                <li>Quick Turnaround Times</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/wedding-cards-hero.jpg"
                alt="Elegant Wedding Cards"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Recent Designs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Replace these images with your actual wedding card designs */}
            <img
              src="/images/wedding-card-1.jpg"
              alt="Wedding Card Design 1"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/wedding-card-2.jpg"
              alt="Wedding Card Design 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/wedding-card-3.jpg"
              alt="Wedding Card Design 3"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/wedding-card-4.jpg"
              alt="Wedding Card Design 4"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/wedding-card-5.jpg"
              alt="Wedding Card Design 5"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/wedding-card-6.jpg"
              alt="Wedding Card Design 6"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "Digital World exceeded our expectations! The wedding cards were
                not only beautiful but also delivered on time. We received so
                many compliments on our invitations."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                Ayesha & Ahmed
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "The design process was smooth and personalized. Their attention
                to detail made our special day even more memorable."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                Sara & Ali
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Dream Wedding Card?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Let Digital World bring your vision to life with our custom wedding
            card designs and premium printing services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
