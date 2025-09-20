import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: "#86c9d8" }}
    >
      <div className="max-w-7xl mx-auto" style={{ backgroundColor: "#86c9d8" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" >
          <div>
            <h3 className="text-2xl mb-4">Rosar Nani</h3>
            <p className="text-white/80">
              Bringing you exceptional food experiences with quality, passion,
              and care.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Catering
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li>123 Food Street</li>
              <li>Delicious City, DC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@rosarnani.com</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Rosar Nani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
