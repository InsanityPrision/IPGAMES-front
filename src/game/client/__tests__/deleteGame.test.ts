import { gamesClient } from "../GamesClient";

describe("Given the deleteGames method of GamesClient", () => {
  describe("When its called", () => {
    test("Then it should return the game with a title 'Outer Wilds'", async () => {
      const expectedGameName = "Outer Wilds";

      const deletedGame = await gamesClient.deleteGame(
        "675f26f9a8e171c225f161d0",
      );

      expect(deletedGame.name).toBe(expectedGameName);
    });
  });
});
