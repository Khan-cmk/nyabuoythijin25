import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          MyStore
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition">Home</a>
          <a href="#products" className="text-gray-700 hover:text-gray-900 transition">Products</a>
          <a href="#new" className="text-gray-700 hover:text-gray-900 transition">New In</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Call-to-action button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition">Home</a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 transition">Products</a>
            <a href="#new" className="text-gray-700 hover:text-gray-900 transition">New In</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2">
              Shop Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
