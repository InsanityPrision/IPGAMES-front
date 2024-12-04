type rateGrade = 0 | 1 | 2 | 3 | 4 | 5;

export type GenderType =
  | "Action"
  | "Shooter"
  | "RPG"
  | "Adventure"
  | "Simulation"
  | "Horror"
  | "Sports"
  | "Puzzle";

export interface Game {
  _id: string;
  name: string;
  price: number;
  isFree: boolean;
  rate: rateGrade;
  description: string;
  developer: string;
  date: Date;
  genders: GenderType[];
  imageUrl: string;
  imageAlt: string;
}
