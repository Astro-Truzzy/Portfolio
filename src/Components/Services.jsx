import React from "react";
//icon
import {} from "react-icons";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
//links
import { Link } from "react-scroll";
//icons
import { BsArrowUpRight } from "react-icons/bs";

//service data
const services = [
  {
    name: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero sed neque efficitur auctor vel at nunc. Nullam quis diam vel nunc consectetur dignissim.",
    link: "Learn more",
  },

  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero sed neque efficitur auctor vel at nunc. Nullam quis diam vel nunc consectetur dignissim.",
    link: "Learn more",
  },

  {
    name: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero sed neque efficitur auctor vel at nunc. Nullam quis diam vel nunc consectetur dignissim.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
             mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6"> What I Do </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer, exploring full-stack
              opportunities, project-driven.
            </h3>
            <button className="btn btn-sm"> See My Work</button>
          </motion.div>
          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {/* services list*/}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px]
                  flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider font-primary
                      font-semibold mb-6"
                      >
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
