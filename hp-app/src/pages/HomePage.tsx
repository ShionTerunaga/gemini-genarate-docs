import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/characters';
import { type Character } from '../types/character';
import { Link } from 'react-router-dom';
import { container, characterList, characterItem, characterImage, characterName, characterHouse } from '../styles/HomePage.css';

export const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (err) {
        setError('キャラクターの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div className={container}>
      <h1>ハリーポッター図鑑</h1>
      <nav>
        <Link to="/login">ログイン</Link> | <Link to="/register">新規登録</Link> | <Link to="/quiz">クイズ</Link>
      </nav>
      <h2>キャラクター一覧</h2>
      <ul className={characterList}>
        {characters.map((character) => (
          <li key={character.id} className={characterItem}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} className={characterImage} />
              <div className={characterName}>{character.name}</div>
              {character.house && <div className={characterHouse}>{character.house}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};