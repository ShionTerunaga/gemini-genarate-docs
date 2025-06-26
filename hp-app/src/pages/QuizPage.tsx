import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/quizData';
import { container, quizQuestion, quizOptions, quizOption, quizButton } from '../styles/QuizPage.css';

export const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/quiz/result', { state: { score, totalQuestions: quizData.length } });
    }
  };

  return (
    <div className={container}>
      <h1>クイズ</h1>
      {currentQuestion ? (
        <div>
          <p className={quizQuestion}>Q{currentQuestionIndex + 1}. {currentQuestion.question}</p>
          <div className={quizOptions}>
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`${quizOption} ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className={quizButton}
            disabled={selectedAnswer === null}
          >
            {currentQuestionIndex < quizData.length - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      ) : (
        <div>クイズがありません。</div>
      )}
    </div>
  );
};