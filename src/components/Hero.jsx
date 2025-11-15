import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-center">
      
      
      <div className="flex flex-col md:w-full w-full px-6 md:px-12 mt-16">
  <div className="flex flex-row items-start gap-10">
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="w-5 h-2 rounded-full bg-[#915EFF]" />
      <div className="w-1 sm:h-80 h-100 violet-gradient" />
    </div>

    <div>
      <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight">
        Hi, I'm <span className="text-[#915EFF]">Ganesh</span>
      </h1>

      <p className="mt-6 text-white-100 text-base md:text-lg leading-relaxed">
        Driven engineer with 3+ years of experience building automation frameworks
        and improving software quality. Currently transitioning into backend
        development after completing the backend curriculum at Scaler Academy,
        where I built multiple real-world projects. Passionate about solving
        engineering challenges, designing scalable systems, and contributing
        directly as a backend developer.
      </p>


          </div>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE (CANVAS) */}
      <div className="md:w-1/2 w-full h-[400px] md:h-[400px] flex justify-center items-center mt-60">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
           
          </div>

          <p className="text-white/70 text-sm mt-1 tracking-wide">
      Scroll ↓
    </p>
        </a>
      </div>

    </section>
  );
};

export default Hero;
