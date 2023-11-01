export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: King | Squire | Advisor | Figther;
};

export interface King extends Character {
  reingYears: number;
};

export interface Squire extends Character {
  serveLevel: number;
  servesTo: Fighter;
};

export interface Advisor extends Character {
  adviseTo: Fighter;
};

export interface Fighter extends Character {
  skillLevel: number;
  weapon: string;
};
