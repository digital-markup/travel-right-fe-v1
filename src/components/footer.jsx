import React from "react";
import { Link } from "react-router";
import { Facebook, X, Linkedin, Mail, Phone } from "lucide-react";

const footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-mainColor text-white py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <div>
            <img src="/Srilanka_logo.png" alt="" className="w-[200px]" />
          </div>
        </div>

        {/* Contacts Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl mb-4 text-center">Contacts</h3>
          <div className="w-full flex justify-center">
            <div className="space-y-2 flex flex-col items-start">
              <Link
                href="mailto:trycatch@outlook.com"
                className="flex items-center justify-start gap-2 hover:underline"
              >
                <Mail />
                trycatch@outlook.com
              </Link>
              <p className="flex items-center justify-start gap-2">
                <Phone />
                +94 77 214524518
              </p>
            </div>
          </div>
        </div>

        {/* Recent Trips Section */}
        <div>
          <h3 className="text-2xl mb-4 text-center">Recent Trips</h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            <img
              src="/home/maligawa.jpeg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
            <img
              src="/home/ruwn.jpeg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
            <img
              src="/home/9arch.jpeg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
            <img
              src="/anu.jpg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
            <img
              src="/anu.jpg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
            <img
              src="/anu.jpg"
              alt="Ancient ruins"
              className="rounded-lg object-cover w-[80px] h-[80px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright and Social Icons */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/20">
        <p className="text-sm mb-4 md:mb-0">
          © 2024 - Try Catch All Rights Reserved
        </p>
        <div className="flex gap-4">
          <Link href="#" className="hover:opacity-80">
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:opacity-80">
            <X className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
         
        </div>
      </div>
    </footer>
  );
};

export default footer;
