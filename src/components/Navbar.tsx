import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36 max-sm:hidden"
          />
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo"
            className="w-9 hidden max-sm:block"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-medium">
          <Link to="/" className="text-blue-700 hover:text-blue-700">Home</Link>
          <Link to="/team" className="hover:text-blue-700">Team</Link>
          <Link to="/feature" className="hover:text-blue-700">Feature</Link>
          <Link to="/blog" className="hover:text-blue-700">Blog</Link>
          <Link to="/about" className="hover:text-blue-700">About</Link>
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-gray-400 rounded-full">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2"
        >
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden  
          transition-all duration-300
          ${open ? "visible" : "invisible"}
        `}
      >
        {/* Background Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`
            absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity
            ${open ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Sidebar */}
        <aside
          className={`
            absolute top-0 left-0 w-72 h-full bg-white shadow-lg p-6
            transition-transform duration-300 
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white shadow flex items-center justify-center rounded-lg "
          >
            <XIcon className="w-6 h-6 text-gray-700" />
          </button>

          <ul className="mt-12 space-y-6 text-[16px] font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="text-blue-700">Home</Link></li>
            <li><Link to="/team" onClick={() => setOpen(false)}>Team</Link></li>
            <li><Link to="/feature" onClick={() => setOpen(false)}>Feature</Link></li>
            <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>

          <div className="mt-8 space-y-4">
            <Link to="/login">
              <button className="w-full px-4 py-2 border border-gray-400 rounded-full my-2">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="w-full px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 my-2">
                Sign up
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
