import GamesClient from "../GamesClient";

describe("Given the getGames method of gameClient class", () => {
  describe("When is called", () => {
    test("Then it should return a list of games with names: 'Subnautica' and 'Minecraft'", async () => {
      const gamesClient = new GamesClient();

      const games = await gamesClient.getGames();

      expect(games).toMatchObject([
        expect.objectContaining({
          name: "Subnautica",
        }),
        expect.objectContaining({
          name: "Minecraft",
        }),
      ]);
    });
  });
});
