import { gamesClient } from "../GamesClient";

describe("Given the getGameById method of GamesClient", () => {
  describe("When its called with the id of 'Outer Wilds'", () => {
    test("Then it should return the game with a title 'Outer Wilds'", async () => {
      const expectedGameName = "Outer Wilds";
      const outerWildsId = "675f26f9a8e171c225f161d0";

      const game = await gamesClient.getGameById(outerWildsId);

      expect(game.name).toBe(expectedGameName);
    });
  });
});
