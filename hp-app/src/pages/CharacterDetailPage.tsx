import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCharacterById } from '../api/characters';
import { type Character } from '../types/character';
import { container, characterDetail, characterDetailImage, characterDetailInfo, backLink } from '../styles/CharacterDetailPage.css';

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      if (!id) {
        setError('キャラクターIDが指定されていません。');
        setLoading(false);
        return;
      }
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError('キャラクターの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    getCharacter();
  }, [id]);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  if (!character) {
    return <div>キャラクターが見つかりませんでした。</div>;
  }

  return (
    <div className={container}>
      <Link to="/" className={backLink}>&lt; 戻る</Link>
      <h1>キャラクター詳細</h1>
      <div className={characterDetail}>
        {character.image && <img src={character.image} alt={character.name} className={characterDetailImage} />}
        <div className={characterDetailInfo}>
          <p><strong>名前:</strong> {character.name}</p>
          {character.dateOfBirth && <p><strong>生年月日:</strong> {character.dateOfBirth}</p>}
          {character.house && <p><strong>所属寮:</strong> {character.house}</p>}
          {character.wand && character.wand.wood && <p><strong>杖の木:</strong> {character.wand.wood}</p>}
          {character.wand && character.wand.core && <p><strong>杖の芯:</strong> {character.wand.core}</p>}
          {character.patronus && <p><strong>守護霊:</strong> {character.patronus}</p>}
          <p><strong>俳優:</strong> {character.actor}</p>
          <p><strong>生存:</strong> {character.alive ? 'はい' : 'いいえ'}</p>
          {/* その他の詳細情報もここに追加 */}
        </div>
      </div>
    </div>
  );
};