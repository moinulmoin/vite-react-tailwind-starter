import React from "react";
import { Question } from "../types/Quiz";

type Props = {
  questionData: Question;
  currentIndex: number;
  selectedOption?: string;
  onSelectOption: (option: string) => void;
};

const QuestionCard: React.FC<Props> = ({ questionData, currentIndex, selectedOption, onSelectOption }) => {
  return (
    <div className="mb-6 p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">
        Câu {currentIndex + 1}: {questionData.question}
      </h2>

      {questionData.images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          {questionData.images.map((src: string, idx: number) => (
            <img
              key={idx}
              src={src}
              alt={`Hình minh họa ${idx + 1}`}
              className="w-64 h-64 object-contain mx-auto border rounded"
            />
          ))}
        </div>
      )}

      <div className="space-y-2">
        {questionData.options.map((option, i) => (
          <label key={i} className="block p-2 border rounded cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name={`question-${currentIndex}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
