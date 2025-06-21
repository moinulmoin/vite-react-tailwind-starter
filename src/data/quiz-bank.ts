import { Quiz } from "../types/Quiz";

export const quizBank: Record<string, Quiz> = {
  "ham-so": {
    title: "Đề luyện tập: Hàm số bậc nhất",
    topic: "Hàm số",
    time_limit_minutes: 10,
    questions: [
      {
        question: "Cho hàm số y = ax + b đi qua A(1,2) và B(2,5). Giá trị của a là?",
        options: ["1", "2", "3", "4"],
        correct_answer: "3",
        explanation: "Để tìm a, ta sử dụng công thức độ dốc: a = (y2 - y1) / (x2 - x1) = (5 - 2) / (2 - 1) = 3."
      },
      {
        question: "Đồ thị hàm số y = 2x + 1 cắt trục hoành tại điểm nào?",
        options: ["(0;1)", "(1;0)", "(-0.5;0)", "(0;-1)"],
        correct_answer: "(-0.5;0)",
        explanation: "Để tìm điểm cắt trục hoành, ta đặt y = 0: 0 = 2x + 1 => x = -0.5."
      },
      {
        question: "Đồ thị sau biểu diễn hàm số nào?",
        images: ["../public/pic/GGmGHNBaMAABthD.jpg", "../public/pic/3712-zerotwo-heartlove.png"],
        options: ["(0;1)", "(1;0)", "(-0.5;0)", "(0;-1)"],
        correct_answer: "(-0.5;0)",
        explanation: "Để tìm điểm cắt trục hoành, ta đặt y = 0: 0 = 2x + 1 => x = -0.5.",
        explanation_images: ["../public/pic/GGmGHNBaMAABthD.jpg"]
      }
    ]
  },
  "pt-bac-2": {
    title: "Đề luyện tập: Phương trình bậc hai",
    topic: "Phương trình",
    time_limit_minutes: 12,
    questions: [
      {
        question: "Phương trình x² - 5x + 6 = 0 có nghiệm nào sau đây?",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correct_answer: "x = 2",
        explanation: "Nghiệm là x = 2 và x = 3. Câu hỏi hỏi 'có nghiệm nào', nên x = 2 là đúng."
      }
    ]
  }
};
