// components/Navbar.js
"use client";

import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from '../app/images/logo/T2devs-Logo.png'
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black">
        <div className="flex justify-between items-center  py-8 w-11/12 text-white  mx-auto">
          <Link href={'/'}><h1 className="text-2xl font-bold cursor-pointer">T2<span className="opacity-95 font-thin">devs</span></h1></Link>
          <button className="text-white z-50 relative w-10 h-10" onClick={() => setOpen(!open)}>
            <MdClose
              size={40}
              className={`absolute top-0 left-0 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <HiBars3BottomLeft
              size={40}
              className={`absolute top-0 left-0 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'
                }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white z-40  ${open ? "" : "translate-x-full"}`}
      >
        <div className="flex flex-col lg:flex-row h-full justify-center items-center w-11/12 mx-auto">
          {/* Left Side */}
          <div className="flex-1 p-10 flex flex-col justify-center items-center text-3xl space-y-6 mx-auto">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`${pathname === '/' ? 'text-[#FF9800] font-bold' : 'text-gray-300'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              onClick={handleLinkClick}
              className={`${pathname === '/portfolio' ? 'text-[#FF9800] font-bold' : 'text-gray-300'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300`}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className={`${pathname === '/services' ? 'text-[#FF9800] font-bold' : 'text-gray-300'
                } hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300`}
            >
              <div className="flex items-center relative group">
                <span>Services</span>

                {/* Arrow toggle (only this toggles dropdown) */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    e.stopPropagation(); // Prevent parent link click
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="ml-2"
                >
                  {dropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-10 text-base bg-black border border-gray-700 rounded-md p-4 z-50 w-max text-gray-300 space-y-2">
                    <Link
                      href="/services/service-1"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Outsourcing Experts and Resources
                    </Link>
                    <Link
                      href="/services/web-development"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Website Design and Development
                    </Link>
                    <Link
                      href="/services/mobile-app"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href="/services/wordpress"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      WordPress Development
                    </Link>
                    <Link
                      href="/services/ui-ux"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      UX/UI Design
                    </Link>
                    <Link
                      href="/services/seo"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Digital Marketing and SEO
                    </Link>
                    <Link
                      href="/services/content"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Content Writing
                    </Link>
                    <Link
                      href="/services/consultancy"
                      onClick={handleLinkClick}
                      className="block hover:text-[#FF9800] transition"
                    >
                      Business Consultancy Support
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="border-r-[1px] h-screen border-gray-900"></div>
          {/* Right Side with static content */}
          <div className="flex-1 grid grid-cols-1 p-10 gap-10 lg:block hidden">
            {/* Projects */}

            <div className="grid grid-cols-2 pb-7" data-aos="zoom-in-up" data-aos-duration="3000">
              <div data-aos="zoom-in-up">
                <h3 className="text-white font-semibold text-xl mb-4">Projects</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Interior design studio</li>
                  <li>Home Security Camera</li>
                  <li>Video Gift</li>
                  <li>Interviewer</li>
                  <li>Causer</li>
                  <li>Tony's Chocolonely</li>
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">Useful Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Careers</li>
                </ul>
              </div>

            </div>
            <hr className="border-r border-gray-900" />
            {/* Contact Locations */}
            <div className="grid grid-cols-2 pt-7">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-white font-semibold text-xl mb-4">Canada</h3>
                <p className="text-sm text-gray-400">
                  71 South Los Carneros Road, California<br />+51 174 705 812
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mt-6 mb-2">Germany</h3>
                <p className="text-sm text-gray-400">
                  Leehove 40, 2678 MC De Lier, Netherlands<br />+31 174 705 811
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
