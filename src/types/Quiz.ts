export type Question = {
  question: string;
  images?: string[]; // 🔍 hình ảnh tùy chọn
  options: string[];
  correct_answer: string;
  explanation?: string; // 🔍 lời giải tùy chọn
  explanation_images?: string[];
};

export type Quiz = {
  title: string;
  topic: string;
  time_limit_minutes: number;
  questions: Question[];
};
