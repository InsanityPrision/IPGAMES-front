import { Game } from "../../types";
import { gamesClient } from "../GamesClient";

describe("Given the createGame method of GamesClient", () => {
  describe("When its called", () => {
    test("Then it should return the new game 'Outer Wilds' created", async () => {
      const outerWilds: Omit<Game, "_id"> = {
        name: "Outer Wilds",
        price: 22.99,
        isFree: false,
        rate: 5,
        description:
          "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
        developer: "Mobius Digital",
        date: "2020-5-18",
        genders: ["Horror", "Adventure"],
        imageUrl: "/outerwilds.webp",
        imageAlt: "Outer Wilds cover",
      };

      const newGame = await gamesClient.createGame(outerWilds);

      expect(newGame.name).toMatch(outerWilds.name);
    });
  });
});
