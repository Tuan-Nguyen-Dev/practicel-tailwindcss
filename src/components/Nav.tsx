import { motion } from "framer-motion";
import { AlignJustify, CircleX } from "lucide-react";
import { useState } from "react";
const Nav = () => {
  const menuItems = [
    { id: 1, label: "About", href: "/" },
    { id: 2, label: "Features", href: "/features" },
    { id: 3, label: "Pricing", href: "/pricing" },
    { id: 4, label: "Testimonials", href: "/testimonials" },
    { id: 5, label: "Help", href: "/help" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-5">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <a href="/">
          <div className="text-2xl font-bold flex items-center">
            <img src="/assets/images/logo.png" alt="Logo" />
            <span className="text-primary">Lades VPN</span>
          </div>
        </a>
        {/* Menu item */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-primary-text hover:text-primary hover:underline transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* button */}
        <div className="flex gap-x-5 items-center">
          <button className="font-bold text-heading-text p-3 hover:cursor-pointer hidden sm:inline-block">
            Sign In
          </button>
          <button className="font-bold text-primary px-10 py-2 border rounded-[50px] hover:cursor-pointer hidden sm:inline-block">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CircleX /> : <AlignJustify />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed right-0 h-full w-64 bg-white shadow-lg flex flex-col items-center space-y-6 md:hidden"
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-primary-text hover:text-primary hover:underline transition"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="flex gap-x-5 items-center">
          <button className="font-bold text-heading-text p-3 hover:cursor-pointer">
            Sign In
          </button>
          <button className="font-bold text-primary px-10 py-2 border rounded-[50px] hover:cursor-pointer">
            Sign Up
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Nav;
