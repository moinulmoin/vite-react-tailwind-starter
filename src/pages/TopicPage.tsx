import { Link } from "react-router-dom";
import { topics } from "@/data/topics";

export default function TopicPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chủ đề môn Toán</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Link
            to={`/topics/${topic.id}`}
            key={topic.id}
            className="border rounded-lg p-4 shadow hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold">{topic.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}