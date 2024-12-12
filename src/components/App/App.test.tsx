import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show 'IPGAMES'", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const ipgamesTitle = screen.getByText(/ipgames/i);

      expect(ipgamesTitle).toBeInTheDocument();
    });

    test("Then it should show a link 'Home'", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: /home/i,
      });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
