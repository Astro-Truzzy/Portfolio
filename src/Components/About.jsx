import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen"
        >
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent"> About Me </h2>
            <h3 className="h3 mb-4">
              {" "}
              I'm a Freelance Front-end Developer, exploring full-stack
              opportunities, project-driven.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam aut maxime at totam explicabo et. Reprehenderit
              nesciunt, optio quo voluptates blanditiis et alias doloremque
              illo? Neque laboriosam quia placeat earum?
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Months of <br />
                    Experience
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={6} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Projects <br />
                    Completed
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={9} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  <p>
                    Satisfied <br />
                    Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"> Contact Me </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;