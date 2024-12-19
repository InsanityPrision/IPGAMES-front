import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddGamePage from "./AddGamePage";
import { MemoryRouter } from "react-router";
import { submitAddGame } from "../../components/AddGame/__tests__/submitAddGame";

describe("Given the AddGamePage component", () => {
  const user = userEvent.setup();

  describe("When rendered", () => {
    test("Then it should show 'Add game' inside a heading", () => {
      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /add game/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Name', 'Price', 'Genders (max:2)', 'Action', 'Description' and 'Date'", () => {
      const fieldsNames = [
        /name/i,
        /price/i,
        /genders \D(max: 2)\D/i,
        /action/i,
        /shooter/i,
        /description/i,
        /date/i,
      ];

      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );

      fieldsNames.forEach((fieldName) => {
        const field = screen.getByText(fieldName);

        expect(field).toBeInTheDocument();
      });
    });

    test("Then it should show disabled 'Create game' button", () => {
      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );

      const createGameButton = screen.getByRole("button", {
        name: /create game/i,
      });

      expect(createGameButton).toBeDisabled();
    });
  });

  describe("When the user fills the name field with 'Counter Strike'", () => {
    test("Then it should show 'Counter Strike' inside the field", async () => {
      const typedNameByUser = "Counter Strike";

      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );
      const nameField = screen.getByLabelText(/name/i);

      await user.type(nameField, typedNameByUser);

      expect(nameField).toHaveValue(typedNameByUser);
    });
  });

  describe("When the user checks the action checkbox", () => {
    test("Then it should show", async () => {
      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );

      const actionCheckbox = screen.getByLabelText(/action/i);

      await user.click(actionCheckbox);

      expect(actionCheckbox).toBeChecked();
    });
  });

  describe("When the user fills all required fields", () => {
    test("Then it should show an enabled 'Create game' button", async () => {
      render(
        <MemoryRouter>
          <AddGamePage />
        </MemoryRouter>,
      );

      await submitAddGame();

      const createGameButton = screen.getByRole("button", {
        name: /create game/i,
      });

      expect(createGameButton).toBeEnabled();
    });
  });
});
