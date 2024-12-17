import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GameDetail from "./GameDetail";
import { Game } from "../../types";
import { store } from "../../../store";

describe("Given the GameDetail component", () => {
  describe("When rendered and receives the game 'Outer Wilds'", () => {
    const outerWilds: Game = {
      _id: "676192ebbedf57af288b13ec",
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

    test("Then it should show 'Outer wilds' inside a heading", () => {
      render(
        <Provider store={store}>
          <GameDetail game={outerWilds} />
        </Provider>,
      );

      const otuerWildsTitle = screen.getByRole("heading", {
        name: /outer wilds/i,
      });

      expect(otuerWildsTitle).toBeInTheDocument();
    });

    test("Then it should show a image with alternative text 'Outer Wilds cover'", () => {
      render(
        <Provider store={store}>
          <GameDetail game={outerWilds} />
        </Provider>,
      );

      const outerWildsImage = screen.getByAltText(/outer wilds cover/i);

      expect(outerWildsImage).toBeInTheDocument();
    });
  });
});
