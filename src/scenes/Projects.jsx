import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const infoVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-5 text-deep-blue`;

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-16">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl underline underline-offset-[15px] decoration-red mb-10">
            MY <span className="text-red">PRO</span>JECTS
          </p>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row 1 */}
          <motion.div
            variants={infoVariant}
            className="relative flex justify-center text-center items-center bg-red p-10
            max-w-[360px] max-h-[360px] text-2xl font-playfair font-semibold rounded-tl"
          >
            Hover for more information
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <a
              href="https://www.mernbook.jalonlewis.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={overlayStyles}>
                <p className="text-xl xs:text-2xl md:text-3xl font-playfair">
                  MERNbook
                </p>
                <p className="text-sm xs:text-base md:text-lg px-1 font-playfair mt-2">
                  A social media application created with the MERN stack that
                  allows users to create posts and follow other users
                </p>
              </div>
              <img src={`../assets/mernbook.png`} alt="MERNbook" />
            </a>
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <a
              href="https://rts.jalonlewis.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${overlayStyles} rounded-tr`}>
                <p className="text-xl xs:text-2xl md:text-3xl font-playfair">
                  RTS redesign
                </p>
                <p className="text-sm xs:text-base md:text-lg px-1 font-playfair mt-2">
                  A React mockup webpage selling powerlifting coaching services
                  from Reactive Training Systems
                </p>
              </div>
              <img
                className="rounded-tr"
                src={`../assets/rts.png`}
                alt="RTS redesign"
              />
            </a>
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={projectVariant} className="relative">
            <a
              href="https://www.flashcard-o-matic.jalonlewis.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${overlayStyles} rounded-bl`}>
                <p className="text-xl xs:text-2xl md:text-3xl font-playfair">
                  Flashcard-O-Matic
                </p>
                <p className="text-sm xs:text-base md:text-lg px-1 font-playfair mt-2">
                  A flashcard app created using React that allows users to
                  create, view, study, edit, and delete decks of flashcards.
                </p>
              </div>
              <img
                className="rounded-bl"
                src={`../assets/flashcard-o-matic.jpeg`}
                alt="Flashcard-O-Matic"
              />
            </a>
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <a
              href="https://www.welovemovies-server.jalonlewis.com/movies"
              target="_blank"
              rel="noreferrer"
            >
              <div className={overlayStyles}>
                <p className="text-xl xs:text-2xl md:text-3xl font-playfair">
                  We Love Movies
                </p>
                <p className="text-sm xs:text-base md:text-lg px-1 font-playfair mt-2">
                  A Restful API created for a movie theater.
                </p>
              </div>
              <img src={`../assets/weLoveMovies.png`} alt="We Love Movies" />
            </a>
          </motion.div>

          <motion.div
            variants={infoVariant}
            className="relative flex justify-center text-center items-center p-10 bg-red
            max-w-[360px] max-h-[360px] text-2xl font-playfair font-semibold rounded-br"
          >
            Click on a project to go to its deployment
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
