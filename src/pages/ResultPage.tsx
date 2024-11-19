import ScoreCard from "@/components/ui/score-card";
import { useQuizControl } from "@/contexts/QuizControl";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { score, quizTaken } = useQuizControl();
  const navigate = useNavigate();

  useEffect(() => {
    if (!quizTaken) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100dvh]  py-8 px-8">
      <ScoreCard finalScore={score} />
    </div>
  );
}
