import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { PiPaperclipHorizontal } from "react-icons/pi";
import { TbCardsFilled } from "react-icons/tb";

import { PiCardsFill } from "react-icons/pi";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="">
      {/* <header className="max-w-[1100px]  md:mx-auto p-2  home_header min-h-screen "> */}
      <header
        className="relative h-[100vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/visiting-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* <div className="absolute top-1/3 left-1/3 w-50 h-50 -z-10 bg-blue-200 blur-3xl pointer-events-none"></div> */}
        {/* <div className="absolute top-2/4 left-1/3 w-50 h-50 -z-10 bg-pink-200 blur-3xl pointer-events-none"></div> */}
        <div className="w-full z-10 relative bg-white">
          <div className="p-2 mx-auto max-w-[1100px]">
            <Navbar />
          </div>
        </div>
        <div className="flex flex-wrap justify-between z-20 text-center relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-1/2   items-center mt-10">
          <div className="w-full ">
            <h1 className="text-3xl font-bold mt-14 sm:mt-2 sm:text-3xl md:text-5xl text-white mb-5">
              Digital World <br /> Your Trusted Local Printing Press
            </h1>

            <p className="sm:text-md sm:block hidden md:text-lg font-light text-white">
              At Digital World Printing Press, we design and print wedding
              cards, panaflex, and visiting cards — all at affordable prices
              across Rawalpinding, Pakistan.
            </p>
            <Link
              href={"/contact"}
              className="bg-pink-600 font-semibold hover:bg-pink-700 py-3 px-8 rounded- hover:transition-all text-white rounded-full transition duration-300 inline-block mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      {/* <section className="services">
        <h2 className="services_heading text-4xl text-pink-800 text-center">
          Our Services
        </h2>
      </section> */}

      <section id="services" className="py-16 max-w-[1100px]  mx-auto p-2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center pb-16 text-pink-900 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Cards */}
            <div className="bg-white hover:scale-110 transition-all h-80 p-6 rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
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
                href="/wedding-cards"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
            {/* panaflex Printing */}
            <div className="bg-white p-6 h-80 hover:scale-110 transition-all rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
              <div className="mb-4">
                {/* panaflex icon (replace with your preferred icon) */}
                <PiPaperclipHorizontal className="text-6xl text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Panaflex Printing
              </h3>
              <p className="text-gray-600 text-center my-3">
                High-quality panaflex designs for banners and signage that make
                a lasting impact.
              </p>
              <Link
                href="/panaflex"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
            {/* Visiting Cards */}
            <div className="bg-white p-6 h-80 rounded-xl hover:scale-110 transition-all shadow-[0_4px_20px_rgba(236,72,153,0.5)] flex flex-col items-center">
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
                href="/visiting-cards"
                className="mt-auto inline-block text-pink-800 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section
        id="why-choose-us"
        className="py-24 bg-white max-w-[1100px]  mx-auto p-2"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-900 py-16 text-center mb-12">
            Why Choose Digital World
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Local Expertise */}
            <div className="flex items-start">
              <div className="flex-shrink-0 text-pink-800 mr-4">
                {/* Example icon: Location Pin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                  Local Expertise
                </h3>
                <p className="text-gray-500">
                  Based in Rawalpindi, we understand the local market and
                  provide tailored printing solutions for your needs.
                </p>
              </div>
            </div>
            {/* High-Quality Printing */}
            <div className="flex items-start">
              <div className="flex-shrink-0 text-pink-800 mr-4">
                {/* Example icon: Quality Badge */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                  High-Quality Printing
                </h3>
                <p className="text-gray-500">
                  We use state-of-the-art printing technology ensuring every
                  wedding card, panaflex banner, and visiting card meets
                  exceptional quality standards.
                </p>
              </div>
            </div>
            {/* Affordable Pricing */}
            <div className="flex items-start">
              <div className="flex-shrink-0 text-pink-800 mr-4">
                {/* Example icon: Price Tag */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l8 8-8 8-8-8 8-8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                  Affordable Pricing
                </h3>
                <p className="text-gray-500">
                  Enjoy competitive pricing without compromising on quality,
                  making premium printing accessible for every budget.
                </p>
              </div>
            </div>
            {/* Quick Turnaround */}
            <div className="flex items-start">
              <div className="flex-shrink-0 text-pink-800 mr-4">
                {/* Example icon: Clock */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                  Quick Turnaround
                </h3>
                <p className="text-gray-500">
                  Fast, reliable service ensures your projects are completed on
                  schedule, keeping your deadlines intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className=" bg-pink-900">
        <h2 className="text-4xl  text-center pt-16 font-bold text-white mb-8">
          About Our Printing Press
        </h2>
        <div className="container flex flex-col md:flex-row  max-w-[1100px]  mx-auto p-2">
          {/* Text Content */}

          <div className="md:w-1/2 text-lg  mb-8 p-8 md:mb-0">
            <p className="text-white mb-4">
              Digital World is a leading printing press based in Rawalpindi,
              dedicated to delivering high-quality printing solutions at
              affordable prices. We specialize in crafting exquisite wedding
              cards, innovative panaflex banners, and professional visiting
              cards that make a lasting impression.
            </p>
            <p className="text-white">
              With years of experience and a passion for creativity, our
              dedicated team combines state-of-the-art technology with
              personalized customer service. We take pride in our quick
              turnaround times and commitment to excellence, ensuring every
              project meets the highest standards.
            </p>
            <div>
              <h3 className="text-xl mt-4 font-semibold text-white">
                Arif Khan
              </h3>
              <p className="text-white">Owner & Founder</p>
            </div>
          </div>
          {/* Image or Visual */}
          <div className="md:w-1/2 flex p-8  h-full justify-center">
            <Image
              src="/images/digitalworld.jpg"
              alt="Digital World Printing Press"
              className="  h-full rounded-xl"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-pink-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-gray-500 text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Printing Experience?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            At Digital World, we blend creativity with quality to deliver
            premium printing solutions—from stunning wedding cards to
            eye-catching panaflex designs and professional visiting cards. Let’s
            bring your vision to life!
          </p>
          {/* Contact Form */}
          {/* // form/ */}
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
}
