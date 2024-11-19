import { quizData } from "@/data";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface QuizControlContextType {
  currentQuizIndex: number;
  setCurrentQuizIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  verifyAnswer: (answer: string) => void;
  quizTaken: boolean;
}

export const QuizControl = createContext<QuizControlContextType>({
  currentQuizIndex: 0,
  setCurrentQuizIndex: () => {},
  score: 0,
  verifyAnswer: () => {},
  quizTaken: false,
});

export const useQuizControl = () => {
  const context = useContext(QuizControl);
  if (!context) {
    throw new Error("useQuizControl must be used within a QuizControlProvider");
  }
  return context;
};

export const QuizControlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  const quizTaken = useRef(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  const verifyAnswer = (ans: string) => {
    if (ans === quizData[currentQuizIndex].correct) {
      setScore((prev) => prev + 1);
    }

    if (currentQuizIndex + 1 === quizData.length) {
      quizTaken.current = true;
      navigate("/result");
    } else {
      setCurrentQuizIndex((prev) => prev + 1);
    }

    console.log(score);
  };

  return (
    <QuizControl.Provider
      value={{
        currentQuizIndex: currentQuizIndex,
        setCurrentQuizIndex: setCurrentQuizIndex,
        score: score,
        verifyAnswer: verifyAnswer,
        quizTaken: quizTaken.current,
      }}
    >
      {children}
    </QuizControl.Provider>
  );
};
