import PageBreak from "../components/PageBreak";
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
        <p className="font-playfair font-semibold text-4xl mb-5 text-red underline underline-offset-[5px]">
          TESTIMONIALS
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-green max-w-[400px] h-[550px] flex flex-col justify-end px-5 pt-30 pb-5 mt-48
            before:absolute before:top-[-120px] before:-ml-[120px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl -mb-5">“</p>
          <p className="text-left text-base xs:text-lg">
            Jalon is an engineer with a passion for building software, learning,
            and solving problems. He makes the whole process look so fun that it
            gravitates his colleagues around him to create a very productive and
            collaborative environment in his team. He has a very strong work
            ethic, where he can work several hours non stop and still be ready
            to learn more new concepts right afterwards. He is a
            class-personified professional who I recommend to any development.
          </p>
          <p className="text-right text-base xs:text-lg">
            -Saurabh Dahal, Instructor
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[550px] flex flex-col justify-end px-5 pt-30 pb-5 mt-48
          before:absolute before:top-[-120px] before:-ml-[120px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl  -mb-5">“</p>
          <p className="text-left text-sm xs:text-base">
            Jalon is a very hard-working person who can tackle any development
            challenge with ease. We've studied together and worked on multiple
            team projects, and I was always intrigued by the way he thinks
            through problems. Jalon is the one who will speak up and ask the
            hard questions, dig deep into problems, and figure out a way to find
            a better, more innovative solution. It's been inspirational to watch
            him as he's quickly completed coursework, started side projects, and
            shared his learnings with others. He's also an all-around great guy
            to work with! I highly recommend him to anyone looking for an
            A-player.
          </p>
          <p className="text-right text-base xs:text-lg">
            -Katya Sarmiento, Classmate
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[550px] flex flex-col justify-end px-5 pb-5 mt-48
          before:absolute before:top-[-120px] before:-ml-[120px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl -mb-5">“</p>
          <p className="text-left text-sm xs:text-base">
            Jalon is an engineer with a passion for building software, learning,
            and solving problems. He makes the whole process look so fun that it
            gravitates his colleagues around him to create a very productive and
            collaborative environment in his team. He has a very strong work
            ethic, where he can work several hours non stop and still be ready
            to learn more new concepts right afterwards. He is a
            class-personified professional who I recommend to any development.
          </p>
          <p className="text-right text-base xs:text-lg">
            -Riley Miller, Mentor
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
