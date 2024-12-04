import GameClient from "../GameClient";

describe("Given the getGames method of gameClient class", () => {
  describe("When is called", () => {
    test("Then it should return a list of games with names: 'Subnautica' and 'Minecraft'", async () => {
      const gamesClient = new GameClient();

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
