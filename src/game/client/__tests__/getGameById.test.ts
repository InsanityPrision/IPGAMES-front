import { gamesClient } from "../GamesClient";

describe("Given the getById method of GamesClient", () => {
  describe("When its called", () => {
    test("Then it should return the game with a title 'Outer Wilds'", async () => {
      const expectedGameName = "Outer Wilds";

      const game = await gamesClient.getById("675f26f9a8e171c225f161d0");

      expect(game.name).toBe(expectedGameName);
    });
  });
});
