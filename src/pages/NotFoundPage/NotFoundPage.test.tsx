import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Page not found' in a heading", () => {
      render(<NotFoundPage />);

      const notFoundPageTitle = screen.getByRole("heading", {
        name: /page not found/i,
      });

      expect(notFoundPageTitle).toBeInTheDocument();
    });

    test("Then it should show a image with alternative text 'Error 404 not found'", () => {
      const alternativeText = /error 404 not found/i;

      render(<NotFoundPage />);

      const notFoundImage = screen.getByAltText(alternativeText);

      expect(notFoundImage).toBeInTheDocument();
    });
  });
});
