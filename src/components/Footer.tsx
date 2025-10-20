import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-4">Chef On Demand</h3>
            <p className="text-secondary-300 mb-4">
              Experience gourmet dining at home with our chef-prepared meals 
              delivered fresh to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-2xl">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#menu" className="text-secondary-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="/#about" className="text-secondary-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/order" className="text-secondary-300 hover:text-white transition-colors">Order Now</a></li>
              <li><a href="/#contact" className="text-secondary-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-secondary-300">
              <p>📞 (555) 123-4567</p>
              <p>✉️ hello@chefondemand.com</p>
              <p>📍 123 Food Street<br />Culinary City, FC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 Chef On Demand. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}