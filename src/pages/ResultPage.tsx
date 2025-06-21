import { useLocation, Link } from "react-router-dom";
import { ResultState } from "@/types/ResultState";

const ResultPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as ResultState;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🎉 Kết quả làm bài</h1>
      <p className="text-center text-lg mb-6">
        Bạn đã làm đúng <strong>{state.score}</strong> / <strong>{state.total}</strong> câu.
      </p>

      <div className="space-y-4">
        {state.quiz.questions.map((q, i) => {
          const userAnswer = state.userAnswers[i];
          const isCorrect = userAnswer === q.correct_answer;

          const icon = !userAnswer ? "❓"
                      : isCorrect ? "✔️"
                      : "✖️";

          const iconColor = !userAnswer ? "text-gray-500"
                          : isCorrect ? "text-green-600"
                          : "text-red-600";

          return (
            <div key={i} className="p-4 border rounded shadow">
              <h2 className="font-semibold mb-2">Câu {i + 1}: {q.question}</h2>

              <p className="flex items-center">
                <span className={`mr-2 text-xl ${iconColor}`}>{icon}</span>
                <span>
                  <strong>Bạn chọn:</strong>{" "}
                  <span className={iconColor}>{userAnswer ?? "(Chưa chọn)"}</span>
                </span>
              </p>

              {!isCorrect && userAnswer && (
                <p>
                  <strong>Đáp án đúng:</strong>{" "}
                  <span className="text-green-700">{q.correct_answer}</span>
                </p>
              )}

              {(
                <div className="mt-4 text-sm text-gray-700">
                  <div>
                    <strong>Lời giải:</strong>
                  </div>

                  {/* Hiển thị ảnh giải thích nếu có */}
                  {q.explanation_images && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      {q.explanation_images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Ảnh lời giải ${idx + 1}`}
                          className="max-h-64 object-contain mx-auto border rounded justify-self-center"
                        />
                      ))}
                    </div>
                  )}

                  {q.explanation}
                </div>
              )}

            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link to="/topics" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          🔁 Làm bài khác
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
