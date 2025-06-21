import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopicPage from "@/pages/TopicPage";
import TopicDetailPage from "@/pages/TopicDetailPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicPage />} />
        <Route path="/topics/:topicId" element={<TopicDetailPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
