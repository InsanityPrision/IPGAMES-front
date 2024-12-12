import { render, screen } from "@testing-library/react";
import AddGamePage from "./AddGamePage";

describe("Given the AddGamePage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Add game' inside a heading", () => {
      render(<AddGamePage />);

      const pageTitle = screen.getByRole("heading", {
        name: /add game/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
