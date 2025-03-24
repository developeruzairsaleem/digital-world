// components/Footer.jsx

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-2 pt-10 ">
      <div className="container px-4 max-w-[1100px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Digital World</h3>
            <p className="text-sm mb-4">
              Your trusted local printing press in Rawalpindi Pakistan, offering
              premium wedding cards, penaflex designs, and visiting cards at
              affordable prices.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.626h-3.12V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.827 9.827 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.724 0-4.932 2.208-4.932 4.932 0 .387.044.763.127 1.124C7.728 8.861 4.1 6.922 1.671 3.89a4.935 4.935 0 0 0-.666 2.479c0 1.71.87 3.213 2.188 4.096a4.903 4.903 0 0 1-2.23-.616v.062c0 2.388 1.698 4.384 3.95 4.833a4.935 4.935 0 0 1-2.224.085c.63 1.963 2.445 3.392 4.6 3.432a9.867 9.867 0 0 1-6.102 2.105c-.396 0-.787-.023-1.17-.068A13.945 13.945 0 0 0 7.548 21c9.142 0 14.307-7.721 14.307-14.407 0-.22-.005-.439-.015-.657A10.262 10.262 0 0 0 24 4.557z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.723v20.554C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.277V1.723C24 .774 23.208 0 22.23 0zM7.119 20.452H3.56V9h3.558v11.452zM5.34 7.582a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm14.611 12.87h-3.556v-5.802c0-1.386-.027-3.17-1.93-3.17-1.932 0-2.23 1.507-2.23 3.064v5.908h-3.556V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.453v6.288z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/wedding-cards" className="hover:text-white">
                  Wedding Cards
                </Link>
              </li>
              <li>
                <Link href="/penaflex" className="hover:text-white">
                  Penaflex
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Address:Opposite Maqbool Plaza, Main Khanna Road, Khannapul,
                Rawalpindi, Pakistan
              </li>
              <li>Phone: +92-3005050947</li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to get the latest updates on our printing solutions and
              special offers.
            </p>
            <form action="/api/subscribe" method="POST" className="flex">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md border border-gray-100 mr-2 focus:outline-none text-white-900"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Digital World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
