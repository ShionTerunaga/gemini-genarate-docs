import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { QuizPage } from './pages/QuizPage';
import { QuizResultPage } from './pages/QuizResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters/:id" element={<CharacterDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz/result" element={<QuizResultPage />} />
    </Routes>
  );
}

export default App;