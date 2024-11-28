import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show 'IPGAMES' in ha heading", async () => {
      render(<Header />);

      const headerTitle = await screen.findByText(/ipgames/i);

      expect(headerTitle).toBeInTheDocument();
    });

    test("Then it should show the IPGAMES icon with alternative text 'IPGAMES icon'", () => {
      render(<Header />);

      const brandIcon = screen.getByAltText(/ipgames logo/i);

      expect(brandIcon).toBeInTheDocument();
    });
  });
});