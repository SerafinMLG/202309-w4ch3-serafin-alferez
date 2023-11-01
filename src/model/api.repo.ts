import { Advisor, Fighter, King, Squire } from './character';
import './css/styles.css';

export type AnyCharacter = King | Fighter | Advisor | Squire;

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getCharacters(): Promise<AnyCharacter[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
