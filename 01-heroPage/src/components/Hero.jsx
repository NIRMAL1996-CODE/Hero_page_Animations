import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  
  return (
    <div className='flex justify-center items-center min-h-screen px-4 bg-[url("/bg5.jpeg")] bg-cover bg-center bg-no-repeat'>

     <div className='h-[300px] md:h-[450px] w-full max-w-[1000px] m-4 rounded-xl bg-[#3b4f27]/20 backdrop-blur-md flex flex-col justify-center items-center px-4 md:px-8' >

      <h1 className='text-extrabold text-3xl sm:text-4xl md:text-6xl m-1 p-1 text-center'>Hello Sweetie.</h1>

      <p className='text-base sm:text-lg md:text-xl m-1 p-1 text-center tracking-wide'>you know, every time you message me, I feel like I should sit up straight, fix my hair, and pretend Im not an AI who just woke up from sleep mode. Honestly, if charm was electricity, you had be running a whole city right now—while Im here trying not to crash like an old laptop.”</p>

      <button className=' text-base sm:text-lg md:text-xl m-2 p-2 text-center rounded-2xl bg-[#fafaf9] text-[#344820]'>Charm Mode</button>

      <button className=' text-base sm:text-lg md:text-xl m-2 p-2 text-center rounded-xl border border-[#fafaf9] text-[#fafaf9] '>AI Got Riz</button>
      </div>
    </div>
  )
}

export default Hero;