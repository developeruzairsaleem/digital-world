// app/Panaflex/page.jsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";

export default function PanaflexPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="bg-white h-screen p-2 max-w-[1100px] md:mx-auto">
        <Navbar />
        <div className="container mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Eye-Catching Panaflex Designs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            At Digital World, we offer innovative Panaflex printing solutions
            that help you stand out. Our vibrant designs and durable materials
            ensure your banners and signage make a lasting impression.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-pink-800 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-pink-900 transition duration-300"
          >
            Let's Connect
          </Link>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="p-2 max-w-[1100px] mx-auto py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Our Panaflex Services Stand Out
              </h2>
              <p className="text-gray-600 mb-4">
                We combine modern design aesthetics with high-quality printing
                technology to deliver Panaflex products that are not only
                visually appealing but also built to last. Whether you need
                banners, signage, or promotional displays, our fully
                customizable options ensure your brand is highlighted in the
                best possible light.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-pink-800" />
                  Innovative & Custom Designs
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-pink-800" />
                  High-Quality & Durable Materials
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-pink-800" />
                  Advanced Printing Technology
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-pink-800" />
                  Fast Turnaround Times
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-end">
              <Image
                src="/images/panaflex-1.webp"
                alt="Panaflex Banner Print"
                className="rounded-lg shadow-lg max-w-full"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-2 max-w-[1100px] mx-auto py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Our Recent Panaflex Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              src="/images/panaflex-2.JPEG"
              alt="Panaflex Design 1"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <Image
              src="/images/panaflex-3.webp"
              alt="Panaflex Design 2"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <Image
              src="/images/panaflex-4.PNG"
              alt="Panaflex Design 3"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <Image
              src="/images/panaflex-4.jpg"
              alt="Panaflex Design 4"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <Image
              src="/images/panaflex-5.webp"
              alt="Panaflex Design 5"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <Image
              src="/images/panaflex-7.jpg"
              alt="Panaflex Design 6"
              className="hover:scale-110 transition-transform w-full h-64 object-cover rounded-lg shadow-md"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-2 max-w-[1100px] mx-auto py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "Digital World's Panaflex printing exceeded our expectations.
                The vibrant colors and durable finish made our promotional
                display stand out."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                Imran & Co.
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "The team at Digital World truly understands how to make your
                brand pop. Their quick turnaround and quality service make them
                our go-to for Panaflex printing."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                Fatima & Associates
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-pink-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Brand with Stunning Panaflex Prints?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Let Digital World bring your vision to life with our cutting-edge
            Panaflex printing solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-pink-800 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
