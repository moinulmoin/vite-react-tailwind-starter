import { useParams, Link } from "react-router-dom";
import { quizBank } from "@/data/quiz-bank";

export default function TopicDetailPage() {
  const { topicId } = useParams();
  const quizzes = Object.entries(quizBank)
    .filter(([_, quiz]) => quiz.topic === topicId)
    .map(([quizId, quiz]) => ({ id: quizId, ...quiz }));

  if (quizzes.length === 0) {
    return <div className="p-4">Không có đề nào cho chủ đề này.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Các đề thuộc chủ đề: <span className="capitalize">{topicId}</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <Link
            to={`/quiz/${quiz.id}`}
            key={quiz.id}
            className="border rounded-lg p-4 shadow hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold">{quiz.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
