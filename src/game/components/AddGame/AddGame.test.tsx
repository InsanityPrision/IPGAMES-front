import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddGame from "./AddGame";

describe("Given the AddGame component", () => {
  const user = userEvent.setup();

  describe("When rendered", () => {
    test("Then it should show 'Name', 'Price', 'Genders (max:2)', 'Action', 'Shooter' , 'Description' and 'Date'", () => {
      render(<AddGame />);

      const nameField = screen.getByLabelText(/name/i);
      const priceField = screen.getByLabelText(/price/i);
      const gendersField = screen.getByText(/genders \D(max: 2)\D/i);
      const actionLabel = screen.getByLabelText(/action/i);
      const shooterLabel = screen.getByLabelText(/shooter/i);
      const descriptionField = screen.getByLabelText(/description/i);
      const dateField = screen.getByLabelText(/date/i);

      expect(nameField).toBeInTheDocument();
      expect(priceField).toBeInTheDocument();
      expect(gendersField).toBeInTheDocument();
      expect(actionLabel).toBeInTheDocument();
      expect(shooterLabel).toBeInTheDocument();
      expect(descriptionField).toBeInTheDocument();
      expect(dateField).toBeInTheDocument();
    });

    test("Then it should show disabled 'Create game' button", () => {
      render(<AddGame />);

      const createGameButton = screen.getByRole("button", {
        name: /create game/i,
      });

      expect(createGameButton).toBeDisabled();
    });
  });

  describe("When the user fills the name field with 'Counter Strike'", () => {
    test("Then it should show 'Counter Strike' inside the field", async () => {
      const typedNameByUser = "Counter Strike";

      render(<AddGame />);

      const nameField = screen.getByLabelText(/name/i);

      await user.type(nameField, typedNameByUser);

      expect(nameField).toHaveValue(typedNameByUser);
    });
  });

  describe("When the user checks the action checkbox", () => {
    test("Then it should show", async () => {
      render(<AddGame />);

      const actionCheckbox = screen.getByLabelText(/action/i);

      await user.click(actionCheckbox);

      expect(actionCheckbox).toBeChecked();
    });
  });
});
