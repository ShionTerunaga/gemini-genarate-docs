import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { container, form, formGroup, label, input, button, linkText } from '../styles/AuthPage.css';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにログインロジックを実装
    console.log('ログイン試行:', { username, password });
    // ログイン成功後、トップページへリダイレクト
    navigate('/');
  };

  return (
    <div className={container}>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit} className={form}>
        <div className={formGroup}>
          <label htmlFor="username" className={label}>ユーザー名/メールアドレス:</label>
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
        <button type="submit" className={button}>ログイン</button>
      </form>
      <p className={linkText}>
        <Link to="/register">新規登録はこちら</Link>
      </p>
    </div>
  );
};