import React from "react";
import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-mainColor text-white py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <h2 className="text-4xl font-cursive">
            <span className="text-3xl">Sri</span> Lanka
            <span className="block text-sm italic">Visit</span>
          </h2>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-2xl mb-4 text-center">Contacts</h3>
          <div className="space-y-2">
            <Link
              href="mailto:trycatch@outlook.com"
              className="flex items-center justify-start gap-2 hover:underline"
            >
            <Mail/>
              trycatch@outlook.com
            </Link>
            <p className="flex items-center justify-start gap-2">
                <Phone/>
              +94 77 214524518
            </p>
          </div>
        </div>

        {/* Recent Trips Section */}
        <div>
          <h3 className="text-2xl mb-4 text-center">Recent Trips</h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
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
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="hover:opacity-80">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
            </svg>
            <span className="sr-only">Google Plus</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default footer;
