"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const PRIMARY_TEXT_COLOR = "text-pink-700";
  const pathname = usePathname();
  return (
    <div className="navbar flex items-center justify-between ">
      <Image width={150} height={150} src={"/images/logo.png"} alt="logo" />
      <div className="mainnav font-semibold flex gap-3">
        <Link
          className={`${pathname === "/" ? PRIMARY_TEXT_COLOR : ""}`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`${pathname === "/services" ? PRIMARY_TEXT_COLOR : ""}`}
          href={"/services"}
        >
          Services
        </Link>
        <Link
          className={`${pathname === "/about" ? PRIMARY_TEXT_COLOR : ""}`}
          href={"/about"}
        >
          About Us
        </Link>
        <Link
          className={`${pathname === "/contact" ? PRIMARY_TEXT_COLOR : ""}`}
          href={"/contact"}
        >
          Contact Us
        </Link>
        <Link
          className={`${
            pathname === "/wedding-cards" ? PRIMARY_TEXT_COLOR : ""
          }`}
          href={"/wedding-cards"}
        >
          Wedding Cards
        </Link>
        <Link
          className={`${pathname === "/penaflex" ? PRIMARY_TEXT_COLOR : ""}`}
          href={"/penaflex"}
        >
          Penaflex
        </Link>
      </div>
    </div>
  );
}
