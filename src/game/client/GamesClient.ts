import { Game } from "../types";
import { GameClientStructure } from "./types";

if (!import.meta.env.VITE_API_REST_URL) {
  throw new Error("Missing VITE_API_REST_URL");
}

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

  async createGame(gameData: Omit<Game, "_id">): Promise<Game> {
    const response = await fetch(`${this.apiRestUrl}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    });

    const { game } = (await response.json()) as { game: Game };

    return game;
  }

  async deleteGame(id: string): Promise<Game> {
    const response = await fetch(`${this.apiRestUrl}/games/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed deleting game");
    }

    const { game } = (await response.json()) as { game: Game };

    return game;
  }

  async getById(id: string): Promise<Game> {
    const response = await fetch(`${this.apiRestUrl}/games/${id}`);

    if (!response.ok) {
      throw new Error("Failed fetching game");
    }

    const { game } = (await response.json()) as { game: Game };

    return game;
  }
}

export const gamesClient = new GamesClient();
