import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { container, resultText, resultScore, resultActions, resultButton } from '../styles/QuizResultPage.css';

export const QuizResultPage: React.FC = () => {
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  return (
    <div className={container}>
      <h1>クイズ結果</h1>
      <p className={resultText}>あなたのスコア:</p>
      <p className={resultScore}>{score} / {totalQuestions} 問</p>
      <p className={resultText}>正答率: {percentage.toFixed(2)}%</p>
      <div className={resultActions}>
        <Link to="/quiz" className={resultButton}>もう一度挑戦する</Link>
        <Link to="/" className={resultButton}>トップページへ戻る</Link>
      </div>
    </div>
  );
};