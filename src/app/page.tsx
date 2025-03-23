"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { PiPaperclipHorizontal } from "react-icons/pi";
import { TbCardsFilled } from "react-icons/tb";

import { PiCardsFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="max-w-[1100px]  mx-auto p-2">
      <header className=" home_header h-screen ">
        <div className="absolute top-1/3 left-1/3 w-50 h-50 -z-10 bg-blue-200 blur-3xl pointer-events-none"></div>
        <div className="absolute top-2/4 left-1/3 w-50 h-50 -z-10 bg-pink-200 blur-3xl pointer-events-none"></div>
        <Navbar />
        <div className="flex justify-between items-center">
          <div className="w-2/4">
            <h1 className="text-5xl text-blue-900 mb-5">
              Digital World <br /> Your Trusted Local Printing Press
            </h1>
            <p className="text-lg font-light">
              At Digital World Printing Press, we design and print wedding
              cards, striking penaflex banners, and professional visiting cards
              — all at affordable prices across Pakistan. Let us help you make a
              lasting impression!
            </p>
            <Link
              href={"/contact"}
              className="bg-pink-800 font-semibold hover:bg-pink-900 hover:transition-all text-white px-10 py-5 inline-block mt-4"
            >
              Contact Us
            </Link>
          </div>

          <Image
            src={"/images/wedding-card.png"}
            alt="wedding card"
            className="rounded-2xl w-1/3"
            width={700}
            height={700}
          />
        </div>
      </header>
      {/* <section className="services">
        <h2 className="services_heading text-4xl text-pink-800 text-center">
          Our Services
        </h2>
      </section> */}

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pink-900 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Cards */}
            <div className="bg-white h-80 p-6 rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
              <div className="mb-4">
                {/* Wedding card icon (replace with your preferred icon) */}
                <TbCardsFilled className="text-6xl text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Wedding Cards
              </h3>
              <p className="text-gray-600 my-3 text-center">
                Elegant, custom wedding card designs that capture the essence of
                your special day.
              </p>
              <Link
                href="/services/wedding-cards"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
            {/* Penaflex Printing */}
            <div className="bg-white p-6 h-80 rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
              <div className="mb-4">
                {/* Penaflex icon (replace with your preferred icon) */}
                <PiPaperclipHorizontal className="text-6xl text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Penaflex Printing
              </h3>
              <p className="text-gray-600 text-center my-3">
                High-quality penaflex designs for banners and signage that make
                a lasting impact.
              </p>
              <Link
                href="/services/penaflex-printing"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
            {/* Visiting Cards */}
            <div className="bg-white p-6 h-80 rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
              <div className="mb-4">
                <PiCardsFill className="text-6xl text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Visiting Cards
              </h3>
              <p className="text-gray-600 my-3 text-center">
                Professional visiting card designs that help you leave a lasting
                impression.
              </p>
              <Link
                href="/services/visiting-cards"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
