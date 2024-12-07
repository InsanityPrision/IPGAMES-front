import { render, screen } from "@testing-library/react";
import GamesCardsList from "./GamesCardsList";
import { Game } from "../../types";

describe("Given the GamesCardsList component", () => {
  describe("When rendered and receives a list of games with titles 'Counter Strike' and 'Outer Wilds'", () => {
    const games: Game[] = [
      {
        _id: "674c54d35afaeddac083e999",
        name: "Counter strike",
        price: 0,
        isFree: true,
        rate: 5,
        description:
          "Counter-Strike: Global Offensive (CS:GO) is a team-based first-person shooter developed by Valve and Hidden Path Entertainment. Released in 2012, it features competitive gameplay where teams of Terrorists and Counter-Terrorists complete objectives, such as planting/defusing bombs or rescuing hostages. Known for its tactical depth, skill-based mechanics, and esports scene, CS:GO remains one of the most popular multiplayer games worldwide.",
        developer: "Valve",
        date: new Date(),
        genders: ["RPG", "Shooter"],
        imageUrl:
          "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        imageAlt: "Counter Strike cover",
      },
      {
        _id: "674c54d35afaeddac083e999",
        name: "Outer Wilds",
        price: 25,
        isFree: false,
        rate: 5,
        description: "",
        developer: "Mobius Digital",
        date: new Date(),
        genders: ["Adventure"],
        imageUrl: "",
        imageAlt: "Outer Wilds cover",
      },
    ];

    test("Then it should show the titles: 'Counter Strike' and 'Outer Wilds'", () => {
      render(<GamesCardsList games={games} />);

      const counterStrikeName = screen.getByRole("heading", {
        name: /counter strike/i,
      });

      const outerWildsName = screen.getByRole("heading", {
        name: /outer wilds/i,
      });

      expect(counterStrikeName).toBeInTheDocument();
      expect(outerWildsName).toBeInTheDocument();
    });

    test("Then it should show images with alternatives text: 'Counter Strike cover' and 'Outer Wilds cover'", () => {
      render(<GamesCardsList games={games} />);

      const counterStrikeImage = screen.getByAltText(/counter strike cover/i);

      const outerWildsImage = screen.getByAltText(/outer wilds cover/i);

      expect(counterStrikeImage).toBeInTheDocument();
      expect(outerWildsImage).toBeInTheDocument();
    });
  });
});
