import { z } from 'zod';

export const CharacterSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  alternate_names: z.array(z.string()).optional(),
  species: z.string(),
  gender: z.string(),
  house: z.string().optional(),
  dateOfBirth: z.string().nullable().optional(),
  yearOfBirth: z.number().nullable().optional(),
  wizard: z.boolean(),
  ancestry: z.string().optional(),
  eyeColour: z.string().optional(),
  hairColour: z.string().optional(),
  wand: z.object({
    wood: z.string().optional(),
    core: z.string().optional(),
    length: z.number().nullable().optional(),
  }).optional(),
  patronus: z.string().optional(),
  hogwartsStudent: z.boolean(),
  hogwartsStaff: z.boolean(),
  actor: z.string(),
  alternate_actors: z.array(z.string()).optional(),
  alive: z.boolean(),
  image: z.string().url().optional(), // 画像URLは必須ではないが、URL形式であることを確認
});

export type Character = z.infer<typeof CharacterSchema>;

export const isCharacter = (data: unknown): data is Character => {
  return CharacterSchema.safeParse(data).success;
};

export const CharactersSchema = z.array(CharacterSchema);

export const isCharacters = (data: unknown): data is Character[] => {
  return CharactersSchema.safeParse(data).success;
};
