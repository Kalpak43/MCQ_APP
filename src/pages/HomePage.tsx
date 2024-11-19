import { ButtonLink } from "@/components/ui/button-link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center flex-col gap-4 h-[100dvh] py-8 px-8">
      <motion.h1
        className="font-[600] text-4xl text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        WELCOME TO THE QUIZ APP!!!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <ButtonLink to="/quiz" variant="default" className="mx-auto">
          Start Quiz
        </ButtonLink>
      </motion.div>
    </main>
  );
}
