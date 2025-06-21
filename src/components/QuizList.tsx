import { Link } from "react-router-dom";

type QuizSummary = {
  id: string;
  title: string;
  time_limit_minutes: number;
};

type Props = {
  quizzes: QuizSummary[];
};

const QuizList: React.FC<Props> = ({ quizzes }) => {
  return (
    <ul className="space-y-4">
      {quizzes.map((quiz) => (
        <li key={quiz.id} className="p-4 border rounded shadow hover:shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{quiz.title}</h3>
              <p className="text-sm text-gray-500">Thời gian: {quiz.time_limit_minutes} phút</p>
            </div>
            <Link
              to={`/quiz/${quiz.id}`}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Bắt đầu
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuizList;
