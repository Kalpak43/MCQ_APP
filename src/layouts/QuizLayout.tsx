import { QuizControlProvider } from "@/contexts/QuizControl";
import { Outlet } from "react-router-dom";

export default function QuizLayout() {
  return (
    <QuizControlProvider>
      <Outlet />
    </QuizControlProvider>
  );
}
