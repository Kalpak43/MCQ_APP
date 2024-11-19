import QuizCard from "@/components/ui/quiz-card";
import { useQuizControl } from "@/contexts/QuizControl";
import { quizData } from "@/data";

export default function QuizPage() {
  const { currentQuizIndex } = useQuizControl();

  return (
    <div className="min-h-[100dvh] flex items-center justify-center py-8 px-8">
      <QuizCard
        title={quizData[currentQuizIndex].question}
        options={quizData[currentQuizIndex].options}
      />
    </div>
  );
}
