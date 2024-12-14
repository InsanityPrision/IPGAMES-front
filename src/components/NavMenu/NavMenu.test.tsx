import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router";

describe("Given the NavMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show two links with 'Home' and 'Add game'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: /home/i,
      });

      const addGameLink = screen.getByRole("link", {
        name: /add game/i,
      });

      expect(homeLink).toBeInTheDocument();
      expect(addGameLink).toBeInTheDocument();
    });

    test("Then it should show tww images with alternative texts 'Home icon' and 'Go to add new game'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeIcon = screen.getByAltText(/go to home/i);
      const addGameIcon = screen.getByAltText(/go to add new game/i);

      expect(homeIcon).toBeInTheDocument();
      expect(addGameIcon).toBeInTheDocument();
    });
  });
});
