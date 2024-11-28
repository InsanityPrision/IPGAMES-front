import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show a link with 'Home'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: /home/i,
      });

      expect(homeLink);
    });

    test("Then it should show a image with alternative text 'Home icon'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const homeIcon = screen.getByAltText(/home icon/i);

      expect(homeIcon).toBeInTheDocument();
    });
  });
});
