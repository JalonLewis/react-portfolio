import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import FrontendIcons from "../components/FrontendIcons";
import BackendIcons from "../components/BackendIcons";
import ToolsIcons from "../components/ToolsIcons";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 mb-24">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 underline underline-offset-[10px] decoration-yellow">
            MY <span className="text-yellow">SKILLS</span>
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-yellow before:z-[-1]"
          >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between">

        <motion.div
          className="md:w-1/3 -mt-20 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center text-3xl md:text-4xl mt-3">
                Frontend
              </p>
            </div>
          </div>
            <FrontendIcons />
        </motion.div>

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center text-3xl md:text-4xl mt-3">
                Backend
              </p>
            </div>
          </div>
            <BackendIcons />
        </motion.div>

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center text-3xl md:text-4xl mt-3">Tools</p>
            </div>
          </div>
            <ToolsIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
