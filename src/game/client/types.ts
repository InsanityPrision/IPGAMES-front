import { Game } from "../types";

export interface GameClientStructure {
  getGames(): Promise<Game[]>;
}
