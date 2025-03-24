/* eslint-disable */
// app/about/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="">
      {/* Navbar */}
      <div className="md:max-w-[1100px] mx-auto py-2 px-2">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="bg-gray-100 w-full">
        <section className=" py-16 md:max-w-[1100px] mx-auto px-2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Digital World
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Digital World is a premier printing press in Rawalpindi, committed
              to delivering high-quality, creative, and affordable printing
              solutions like Panaflex, Wedding cards and Business Cards.
            </p>
          </div>
        </section>
      </div>

      {/* Company Story & Mission */}
      <section className="py-16 md:max-w-[1100px] mx-auto px-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story & Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in Rawalpindi, Digital World started as a local printing
              shop and has become into a full-service printing press. Our
              mission is to transform ideas into stunning printed products — be
              it wedding cards, panaflex banners, or professional visiting
              cards.
            </p>
            <p className="text-gray-600">
              With a focus on quality, innovation, and customer satisfaction, we
              work diligently to ensure every project is a true reflection of
              our clients' vision.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/digitalworld.jpg"
              alt="Our Printing Press"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Founder / Owner Section */}
      <div className="bg-gray-100 w-full">
        <section className="bg-gray-100 py-16 md:max-w-[1100px] mx-auto px-2">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col items-center gap-4 justify-center mb-8 md:mb-0">
              {/* <Image
                src="/images/owner.jpg"
                alt="Owner of Digital World"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              /> */}
              <div className="rounded-full shadow-lg h-36 w-36"></div>
              <p className="text-2xl font-semibold">Arif Khan</p>
              <p className="font-lg text-gray-400">Founder & CEO</p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Founder
              </h2>
              <p className="text-gray-600 mb-4">
                Arif Khan, the founder of Digital World Printing Press. With
                extensive experience in the printing industry, Arif Khan has
                been instrumental in evolving Digital World into a trusted name.
              </p>
              <p className="text-gray-600">
                His hands-on approach, creative insight, and dedication to
                customer service ensure that every project reflects his high
                standards and innovative spirit.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Core Values Section */}
      <section className="py-16 md:max-w-[1100px] mx-auto px-2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We believe in quality, innovation, and affordability. Our team
            strives to deliver exceptional results while maintaining a personal
            touch for every project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                Ensuring every product meets the highest standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Creative solutions tailored to your unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordability
              </h3>
              <p className="text-gray-600">
                High-quality printing that fits every budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="bg-pink-800 w-full">
        <section className="py-16 bg-pink-800 md:max-w-[1100px] mx-auto px-2">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Digital World Difference?
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
              Whether you need wedding cards, panaflex banners, or visiting
              cards, our team is here to bring your vision to life.
            </p>
            <Link href="/contact">
              <div className="inline-block bg-white text-pink-800 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300">
                Contact Us Today
              </div>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
