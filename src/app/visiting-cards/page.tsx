/* eslint-disable */
// app/visiting-cards/page.jsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPalette, FaPrint, FaRocket } from "react-icons/fa";
import { SiGooglecontaineroptimizedos } from "react-icons/si";

export default function VisitingCardsPage() {
  return (
    <main className="">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10 bg-white ">
        <div className=" bg-white px-2 py-2 max-w-[1100px] md:mx-auto ">
          <Navbar />
        </div>
      </div>
      {/* Hero Section with Background Image Overlay */}
      <section
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/visiting-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Make Your First Impression Count
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Our custom visiting cards are designed to reflect your brand's
            unique identity and professionalism.
          </p>
          <Link href="/contact">
            <div className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 p-2 md:max-w-[1100px] mx-auto ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Our Visiting Cards Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <FaPalette className="text-pink-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Creative Designs
                </h3>
                <p className="text-gray-600">
                  Unique and innovative design concepts tailored to your brand.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPrint className="text-pink-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  We use only the highest quality materials and printing
                  techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRocket className="text-pink-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fast Turnaround
                </h3>
                <p className="text-gray-600">
                  Quick production and delivery so you never miss an
                  opportunity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SiGooglecontaineroptimizedos className="text-pink-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Optimized Product
                </h3>
                <p className="text-gray-600">
                  Our designs are created to make a powerful impact on every
                  client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section – Masonry Layout */}
      <section className="py-16 w-full p-2 mx-auto md:max-w-[1100px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Latest Designs
          </h2>
          <div className="columns-1 md:columns-3 gap-6 space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-2.jpg"
                alt="Visiting Card Design 1"
                layout="responsive"
                width={400}
                height={500}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-3.jpg"
                alt="Visiting Card Design 2"
                layout="responsive"
                width={400}
                height={600}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-4.jpg"
                alt="Visiting Card Design 3"
                layout="responsive"
                width={400}
                height={450}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-5.jpg"
                alt="Visiting Card Design 4"
                layout="responsive"
                width={400}
                height={550}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-6.jpg"
                alt="Visiting Card Design 5"
                layout="responsive"
                width={400}
                height={500}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-gray-400 shadow-lg mb-4">
              <Image
                src="/images/visiting-7.jpg"
                alt="Visiting Card Design 6"
                layout="responsive"
                width={400}
                height={600}
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:max-w-[1100px] mx-auto p-2 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "Digital World’s visiting cards not only look fantastic, but
                they have also elevated our brand presence. Truly a game
                changer!"
              </p>
              <h4 className="text-xl font-semibold text-gray-800">
                Rahim & Co.
              </h4>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "The level of creativity and quality in the visiting card
                designs exceeded our expectations. Highly recommended."
              </p>
              <h4 className="text-xl font-semibold text-gray-800">
                Sana & Partners
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-pink-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business Identity?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Let us create visually stunning visiting cards that make your brand
            memorable.
          </p>
          <Link href="/contact">
            <div className="inline-block bg-white text-pink-800 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300">
              Contact Us Today
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
