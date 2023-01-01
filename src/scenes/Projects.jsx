import LineGradient from "../components/LineGradient";
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

const Project = ({ title, projectDescription, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-5 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-3xl font-playfair">{title}</p>
          <p className="text-lg px-1 font-playfair mt-3">{projectDescription}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

<a
  href="https://www.linkedin.com/in/jalon-lewis/"
  target="_blank"
  rel="noreferrer"
></a>;

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-48">
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
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center my-5">
            {" "}
            <LineGradient width="w-[240px]" />
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 mt-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Hover for more information
          </div>
          <Project
            title="Local library"
            projectDescription="There are three datasets that are a part of this project: accounts, authors, and books.
            Functions written to return various statistics and other useful information.
            Higher order functions were utilized including find(), filter(), map(), some(), every(), reduce(), and sort()."
            link="https://github.com/JalonLewis/Local-library"
          />
          <Project
            title="Decoder ring"
            projectDescription="Functions written for an application that will either encode or decode a string using a variety of ciphers.
          A series of tests were written for each cipher using Mocha and Chai to confirm that the cipher works as intended.
          There are three ciphers including Caesar shift, Polybius square, and a substitution cipher."
            link="https://github.com/JalonLewis/decoder-ring"
          />

          {/* Row 2 */}
          <Project
            title="Flashcard-O-Matic"
            projectDescription="A flashcard app created using React that allows users to create, view, study, edit, and delete decks of flashcards."
            link="https://github.com/JalonLewis/FLASHCARD-O-MATIC"
          />
          <Project
            title="We Love Movies"
            projectDescription="Created a database and built out specific routes so that users can gain access to data about movies, theaters, and reviews.
          Node.js, Express, PostgreSQL, and Knex.js were utilized."
            link="https://github.com/JalonLewis/WeLoveMovies"
          />
          {/* <Project title="Project 5" /> */}

          {/* Row 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Click a project to go to its github repository
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
