import { Game } from "../types";
import { GameClientStructure } from "./types";

export class GamesClient implements GameClientStructure {
  private readonly apiRestUrl = import.meta.env.VITE_API_REST_URL;

  async getGames(): Promise<Game[]> {
    const response = await fetch(`${this.apiRestUrl}/games`);

    if (!response.ok) {
      throw new Error("Failed fetching games");
    }

    const { games } = (await response.json()) as { games: Game[] };

    return games;
  }
}

export const gamesClient = new GamesClient();
