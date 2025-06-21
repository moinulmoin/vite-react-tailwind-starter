import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">📚 Ứng dụng luyện đề Toán</h1>
      <p className="text-lg mb-8">Chọn chủ đề bạn muốn luyện tập và bắt đầu làm bài thi trắc nghiệm.</p>
      <Link
        to="/topics"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Chọn chủ đề
      </Link>
    </div>
  );
};

export default Home;
