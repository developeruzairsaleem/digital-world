"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1100px]  mx-auto p-2">
      <div className="absolute top-1/3 left-1/3 w-50 h-50 -z-10 bg-blue-200 blur-3xl pointer-events-none"></div>
      <div className=" home_header ">
        <Navbar />
        <div className="flex justify-between items-center">
          <div className="w-2/4">
            <h1 className="text-5xl text-blue-900 mb-5">
              Digital World <br /> Your Trusted Local Printing Press
            </h1>
            <p className="text-lg">
              At{" "}
              <span className="text-blue-900 font-semibold ">
                Digital World
              </span>{" "}
              Printing Press, we design and print wedding cards, striking
              penaflex banners, and professional visiting cards — all at
              affordable prices across Pakistan. Let us help you make a lasting
              impression!
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
      </div>
      <div></div>
    </div>
  );
}
