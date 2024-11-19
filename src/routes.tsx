import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import { QuizControlProvider } from "./contexts/QuizControl";
import ResultPage from "./pages/ResultPage";
import QuizLayout from "./layouts/QuizLayout";

export const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<QuizLayout />}>
          <Route path="quiz" element={<QuizPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
