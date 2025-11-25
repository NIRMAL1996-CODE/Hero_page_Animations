import { useState} from "react";
// import { gsap } from "gsap";
const Navbar = () => {
   const [open, setOpen] = useState(false);

    // const tl = gsap.timeline();
    // tl.from(".navContainer", {
    //    opacity: 0 }).to(".navContainer",{y: 20, duration: 0.5})

  return (
    <div className=" navContainer fixed top-0 right-0 w-full h-12 flex justify-between items-center px-4 md:px-8 bg-[#3b4f27]/20 backdrop-blur-md  z-50">
      {/* Logo */}
      <div className="navlogo font-bold text-base sm:text-lg md:text-xl">
        Logo
      </div>

      {/* Menu */}
      <div className="navTabs hidden md:flex gap-4 lg:gap-8">
        <h2 className="text-sm sm:text-base md:text-lg">Home</h2>
        <h2 className="text-sm sm:text-base md:text-lg">About</h2>
        <h2 className="text-sm sm:text-base md:text-lg">Service</h2>
        <h2 className="text-sm sm:text-base md:text-lg">Contact</h2>
      </div>

      {/* //Mobile menu */}
        <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="navButton text-2xl text-[#e7ebe2]">
          ☰
        </button>
      </div>

      {open && (
        <div className="navTabs absolute top-12 right-0 w-full bg-[#e7ebe2] flex flex-col items-center gap-4 p-4 md:hidden shadow-lg">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Service</h2>
          <h2>Contact</h2>
          <button className="navButton rounded-xl bg-[#3b4f27] text-[#e7ebe2] p-2 mt-2">
            Learn More
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar;
