import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export const submitAddGame = async () => {
  const user = userEvent.setup();

  const nameField = screen.getByLabelText(/name/i);
  const priceField = screen.getByLabelText(/price/i);
  const rateField = screen.getByLabelText(/rate/i);
  const descriptionField = screen.getByLabelText(/description/i);
  const develeportField = screen.getByLabelText(/developer/i);
  const dateField = screen.getByLabelText(/date/i);
  const imageUrlField = screen.getByLabelText(/image url/i);
  const imageAltField = screen.getByLabelText(/alternative text/i);

  await user.type(nameField, "Counter Strike");
  await user.type(priceField, "3");
  await user.type(rateField, "2");
  await user.type(
    descriptionField,
    "Un juego en equipo 5 contra 5 de tipo shooter",
  );
  await user.type(develeportField, "Valve");
  await user.type(dateField, "2024-12-29");
  await user.type(imageUrlField, "http://localhost:5173/add-game");
  await user.type(imageAltField, "counter strike cover");

  const createGameButton = screen.getByRole("button", {
    name: /create game/i,
  });

  await user.click(createGameButton);
};
