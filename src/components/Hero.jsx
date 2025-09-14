import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-center">
      
      {/* LEFT SIDE - TEXT */}
      <div className="flex flex-col md:w-1/2 w-full px-6 md:px-12">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Ganesh</span>
            </h1>

            <p className={`${styles.heroSubText} mt-4 text-white-100 whitespace-nowrap`}>
            Tester-turned-developer with strong experience in building automation frameworks 
            <br />
            and ensuring software quality, now transitioning into backend development
            <br />
            to build reliable and scalable systems.
          </p>


          </div>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE (CANVAS) */}
      <div className="md:w-1/2 w-full h-[400px] md:h-[600px] flex justify-center items-center mt-60">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
