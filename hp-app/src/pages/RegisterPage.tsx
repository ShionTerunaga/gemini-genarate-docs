import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { container, form, formGroup, label, input, button, linkText } from '../styles/AuthPage.css';

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。');
      return;
    }
    // ここに新規登録ロジックを実装
    console.log('新規登録試行:', { username, email, password });
    // 登録成功後、ログインページへリダイレクト
    navigate('/login');
  };

  return (
    <div className={container}>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit} className={form}>
        <div className={formGroup}>
          <label htmlFor="username" className={label}>ユーザー名:</label>
          <input
            type="text"
            id="username"
            className={input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={formGroup}>
          <label htmlFor="email" className={label}>メールアドレス:</label>
          <input
            type="email"
            id="email"
            className={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={formGroup}>
          <label htmlFor="password" className={label}>パスワード:</label>
          <input
            type="password"
            id="password"
            className={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={formGroup}>
          <label htmlFor="confirmPassword" className={label}>パスワード（確認）:</label>
          <input
            type="password"
            id="confirmPassword"
            className={input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={button}>登録</button>
      </form>
      <p className={linkText}>
        <Link to="/login">ログインはこちら</Link>
      </p>
    </div>
  );
};