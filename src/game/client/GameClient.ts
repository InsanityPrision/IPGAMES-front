import { Game } from "../types";
import { GameClientStructure } from "./types";

class GameClient implements GameClientStructure {
  private readonly apiRestUrl = import.meta.env.VITE_API_REST_URL;

  async getGames(): Promise<Game[]> {
    const response = await fetch(`${this.apiRestUrl}/games`);

    const { games } = (await response.json()) as { games: Game[] };

    return games;
  }
}

export default GameClient;
