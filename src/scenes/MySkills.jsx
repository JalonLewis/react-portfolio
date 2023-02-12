import { motion } from "framer-motion";
import FrontendIcons from "../components/FrontendIcons";
import BackendIcons from "../components/BackendIcons";
import ToolsIcons from "../components/ToolsIcons";

const MySkills = () => {
  return (
    <section id="skills" className="pt-32 pb-16">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mb-16">
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5 underline underline-offset-[10px] decoration-red">
            MY <span className="text-red">SKILLS</span>
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3 px-0 sm:px-10 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16 mb-6">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center md:text-left text-3xl md:text-5xl mt-3 underline underline-offset-[10px]">
                Frontend
              </p>
            </div>
          </div>
          <FrontendIcons />
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10 md:mt-0 px-0 sm:px-10 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16 mb-6">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center text-3xl md:text-5xl mt-3 underline underline-offset-[10px]">
                Backend
              </p>
            </div>
          </div>
          <BackendIcons />
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10 md:mt-0 px-0 sm:px-16 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-16 mb-6">
            <div className="z-10">
              <p className="font-playfair font-semibold text-center md:text-right text-3xl md:text-5xl mt-3 underline underline-offset-[10px]">
                Tools
              </p>
            </div>
          </div>
          <ToolsIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
