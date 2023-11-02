import { useCallback, useMemo, useState } from 'react';
import { ApiRepo } from '../model/api.repo';
import { King, Fighter, Squire, Advisor } from '../model/character';


export type AnyCharacter = King | Fighter | Advisor | Squire;

export function useCharacters() {
  const [characters, setCharacters] = useState<AnyCharacter[]>([]);
  const repo = useMemo(() => new ApiRepo(), []);
  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedCharacters = await repo.getCharacters();
      // Síncrono
      setCharacters(loadedCharacters);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);
  return {
    characters,
    loadCharacters,
  };
}
