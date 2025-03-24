"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const PRIMARY_TEXT_COLOR = "text-pink-900";
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white border-gray-200 w-full mb-4 border-b overflow-hidden">
      <div className="container overflow-hidden flex items-center w-full justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/images/logo.png"
              alt="Digital World Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center sm:gap-2 lg:gap-4">
          <Link
            href="/"
            className={`font-semibold ${
              pathname === "/" ? PRIMARY_TEXT_COLOR : "text-gray-800"
            }`}
          >
            Home
          </Link>
          <Link
            href="/visiting-cards"
            className={`font-semibold ${
              pathname === "/visiting-cards"
                ? PRIMARY_TEXT_COLOR
                : "text-gray-800"
            }`}
          >
            Visiting Cards
          </Link>
          <Link
            href="/wedding-cards"
            className={`font-semibold ${
              pathname === "/wedding-cards"
                ? PRIMARY_TEXT_COLOR
                : "text-gray-800"
            }`}
          >
            Wedding Cards
          </Link>
          <Link
            href="/panaflex"
            className={`font-semibold ${
              pathname === "/panaflex" ? PRIMARY_TEXT_COLOR : "text-gray-800"
            }`}
          >
            Panaflex
          </Link>
          <Link
            href="/about"
            className={`font-semibold ${
              pathname === "/about" ? PRIMARY_TEXT_COLOR : "text-gray-800"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`font-semibold ${
              pathname === "/contact" ? PRIMARY_TEXT_COLOR : "text-gray-800"
            }`}
          >
            Contact Us
          </Link>

          {/* Call Icon with Phone Number */}
          <Link
            href="tel:03005050947"
            className="flex items-center gap-1 font-semibold text-pink-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.518 3.036a2 2 0 01-.45 2.294L9 10.414a11.042 11.042 0 005.586 5.586l1.978-1.966a2 2 0 012.295-.45l3.037 1.518A2 2 0 0121 16.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
              />
            </svg>
            <span>03005050947</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <GiHamburgerMenu className="text-2xl text-pink-900 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/" ? PRIMARY_TEXT_COLOR : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Home
            </Link>
            <Link
              href="/visiting-cards"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/visiting-cards"
                  ? PRIMARY_TEXT_COLOR
                  : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Visiting Cards
            </Link>
            <Link
              href="/wedding-cards"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/wedding-cards"
                  ? PRIMARY_TEXT_COLOR
                  : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Wedding Cards
            </Link>
            <Link
              href="/panaflex"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/panaflex" ? PRIMARY_TEXT_COLOR : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Panaflex
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/about" ? PRIMARY_TEXT_COLOR : "text-gray-800"
              } hover:bg-gray-100`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/contact" ? PRIMARY_TEXT_COLOR : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Contact Us
            </Link>
            {/* Mobile Call Icon with Phone Number */}
            <Link
              href="tel:03005050947"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1 text-pink-900 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.518 3.036a2 2 0 01-.45 2.294L9 10.414a11.042 11.042 0 005.586 5.586l1.978-1.966a2 2 0 012.295-.45l3.037 1.518A2 2 0 0121 16.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
                />
              </svg>
              <span>03005050947</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
