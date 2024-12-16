import { Game } from "../types";

export interface GameClientStructure {
  getGames(): Promise<Game[]>;
  createGame(gameData: Omit<Game, "_id">): Promise<Game>;
  deleteGame(id: string): Promise<Game>;
}
