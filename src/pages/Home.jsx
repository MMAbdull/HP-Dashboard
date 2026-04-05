import { delay, easeIn, motion } from "framer-motion";
import WorkoutCards from "../components/home/WorkoutHomeCards";
import ProgressSection from "../components/home/ProgressSection";
import WeeklyPlan from "../components/home/PlanSection";
import TodayFocus from "../components/home/FocusSection";


function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },

    }),

  };
  return (
    <main>    
      <motion.section
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100"
      >
        <WorkoutCards/>

      </motion.section> 

      <motion.section
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100"
      >
        <ProgressSection/>

      </motion.section>

      <motion.section
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100"
      >
        <WeeklyPlan/>
        
      </motion.section>


      <motion.section
        custom={3}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mx-5 mt-10 mb-16 space-y-6 bg-gray-950 rounded-3xl min-h-100"
      >
        <TodayFocus/>
        
      </motion.section>

      <section className="flex justify-center mb-10">

        <div className="
            relative
            group
            flex justify-center items-center
            m-5
            w-30
            h-15
            bg-gray-950
            cursor-pointer
            shadow-[0_0_10px_rgba(0,0,0,.3)]
            rounded-4xl
            transition-all duration-500
            hover:bg-[#aadd00]">
          <h1 className="absolute text-6xl bottom-1.5 text-white rounded-2xl transition-all duration-500 group-hover:text-black">+</h1>
        </div>
      </section>
    </main>
  );
}

export default Home;
