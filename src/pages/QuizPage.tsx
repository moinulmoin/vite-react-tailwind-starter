import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { quizBank } from "../data/quiz-bank";
import { Quiz, Question } from "../types/Quiz";

import Timer from "../components/Timer";

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data: Quiz | undefined = id ? quizBank[id] : undefined;

  if (!data) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Không tìm thấy đề thi với ID: {id}
      </div>
    );
  }

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSelectOption = (option: string) => {
    setAnswers({ ...answers, [currentIndex]: option });
  };

  const getScore = (): number => {
    let correct = 0;
    data.questions.forEach((q: Question, i: number) => {
      if (answers[i] === q.correct_answer) correct++;
    });
    return correct;
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
    const score = getScore();
    navigate("/result", {
      state: {
        score,
        total: data.questions.length,
        quiz: data,
        userAnswers: answers
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <div className="flex justify-center w-full">
          <Timer
            duration={data.time_limit_minutes * 60}
            onTimeout={handleSubmit}
          />
        </div>
      </div>

      <QuestionCard
        questionData={data.questions[currentIndex]}
        currentIndex={currentIndex}
        selectedOption={answers[currentIndex]}
        onSelectOption={handleSelectOption}
      />

      <div className="flex justify-between mt-4">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Câu trước
        </button>
        <button
          disabled={currentIndex === data.questions.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Câu tiếp
        </button>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Nộp bài
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
