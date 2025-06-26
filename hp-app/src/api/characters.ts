import { CharactersSchema, type Character } from '../types/character';

const API_URL = 'https://hp-api.onrender.com/api/characters';

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: unknown = await response.json();

    // Zodでスキーマを検証
    const parsedData = CharactersSchema.parse(data);

    // 画像がないキャラクターをフィルタリング
    const filteredCharacters = parsedData.filter(character => character.image && character.image.length > 0);

    return filteredCharacters;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return [];
  }
};

export const fetchCharacterById = async (id: string): Promise<Character | undefined> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: unknown = await response.json();

    // APIが配列で返す場合があるので、最初の要素を取得
    const parsedData = CharactersSchema.parse(data);

    return parsedData.find(character => character.id === id);
  } catch (error) {
    console.error(`Failed to fetch character with id ${id}:`, error);
    return undefined;
  }
};
