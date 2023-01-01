import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-[265px]" />
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[450px] flex flex-col justify-end px-5 pt-30 pb-5 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-base">
          Jalon is an engineer with a passion for building software, learning, and solving problems.
          He makes the whole process look so fun that it gravitates his colleagues around him to create 
          a very productive and collaborative environment in his team. He has a very strong work ethic,
          where he can work several hours non stop and still be ready to learn more new concepts right afterwards.
          He is a class-personified professional who I recommend to any development.
          </p>
          <p className="text-right text-lg">
            -Saurabh Dahal, Instructor
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[450px] flex flex-col justify-end px-5 pt-30 pb-5 mt-48
          before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-base">
          Jalon is an engineer with a passion for building software, learning, and solving problems.
          He makes the whole process look so fun that it gravitates his colleagues around him to create 
          a very productive and collaborative environment in his team. He has a very strong work ethic,
          where he can work several hours non stop and still be ready to learn more new concepts right afterwards.
          He is a class-personified professional who I recommend to any development.
          </p>
          <p className="text-right text-lg">
            -Katya Sarmiento, Classmate
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[450px] flex flex-col justify-end px-5 pt-30 pb-5 mt-48
          before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-base">
          Jalon is an engineer with a passion for building software, learning, and solving problems.
          He makes the whole process look so fun that it gravitates his colleagues around him to create 
          a very productive and collaborative environment in his team. He has a very strong work ethic,
          where he can work several hours non stop and still be ready to learn more new concepts right afterwards.
          He is a class-personified professional who I recommend to any development.
          </p>
          <p className="text-right text-lg">
            -Riley Miller, Mentor
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
