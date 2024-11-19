import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { quizData } from "@/data";

export default function ScoreCard({ finalScore }: { finalScore: number }) {
  const [currentScore, setCurrentScore] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const scoreIncrement = Math.min(
        finalScore,
        Math.floor((progress / duration) * finalScore)
      );

      setCurrentScore(scoreIncrement);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCurrentScore(finalScore);
        if (finalScore === quizData.length) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [finalScore, duration]);

  const percentage = (currentScore / quizData.length) * 100;

  return (
    <Card className="w-full md:w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Your Score
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="text-6xl font-bold mb-4 text-blue-600">
          <motion.span
            key={currentScore}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            {currentScore}
          </motion.span>
          <span className="text-3xl text-gray-500">/{quizData.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-lg mb-4">{Math.round(percentage)}% Correct</p>
        {currentScore === finalScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
