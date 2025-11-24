import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <div className='flex justify-center items-center min-h-screen px-4 bg-[url("/bg5.jpeg")] bg-cover bg-center bg-no-repeat'>

     <div className='h-[300px] md:h-[450px] w-full max-w-[1000px] m-4 rounded-xl bg-[#9dd469] flex flex-col justify-center items-center px-4 md:px-8' >

      <h1 className='text-extrabold text-3xl sm:text-4xl md:text-6xl m-1 p-1 text-center'>Hello Hello.</h1>

      <p className='text-base sm:text-lg md:text-xl m-1 p-1 text-center tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt molestiae nihil voluptatem architecto, numquam perspiciatis voluptatibus. Nulla quam reprehenderit deserunt, iste distinctio unde delectus illum blanditiis quod optio. Eligendi!</p>

      <button className=' text-base sm:text-lg md:text-xl m-2 p-2 text-center rounded-xl bg-[#3b4f27] text-[#e7ebe2] '>Explore</button>

      <button className=' text-base sm:text-lg md:text-xl m-2 p-2 text-center rounded-xl border border-[#3b4f27] text-[#3b4f27] '>Learn More</button>
      </div>
    </div>
  )
}

export default Hero;