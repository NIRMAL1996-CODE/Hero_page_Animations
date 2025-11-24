import { useState } from "react";
const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 w-full h-12 flex justify-between items-center px-4 md:px-8 bg-[#3b4f27] z-50">
      {/* Logo */}
      <div className="text-[#e7ebe2] font-bold text-base sm:text-lg md:text-xl">
        Logo
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-4 lg:gap-8 text-[#e7ebe2]">
        <h2 className="text-sm sm:text-base md:text-lg">Home</h2>
        <h2 className="text-sm sm:text-base md:text-lg">About</h2>
        <h2 className="text-sm sm:text-base md:text-lg">Service</h2>
        <h2 className="text-sm sm:text-base md:text-lg">Contact</h2>
      </div>

      {/* //Mobile menu */}
        <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl text-[#e7ebe2]">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-12 right-0 w-full bg-[#e7ebe2] flex flex-col items-center gap-4 p-4 md:hidden shadow-lg">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Service</h2>
          <h2>Contact</h2>
          <button className="rounded-xl bg-[#3b4f27] text-[#e7ebe2] p-2 mt-2">
            Learn More
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar;
