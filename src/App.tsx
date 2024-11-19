import "./App.css";
import { RoutesContainer } from "./routes";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="relative ">
      <div className="absolute inset-0 z-[-1] max-h-[100dvh] overflow-hidden">
        <motion.div
          className="absolute -left-1/4 -top-1/4 w-[600px] aspect-square bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -right-1/4 -bottom-1/4 w-[600px] aspect-square bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.1, 1.2, 1.1],
            x: [0, -30, 0, 30, 0],
            y: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/4 w-[600px] aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.1, 1.2, 1, 1.1, 1.2],
            x: [0, 40, 0, -40, 0],
            y: [0, -40, 0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <RoutesContainer />
    </main>
  );
}

export default App;
