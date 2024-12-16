import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { http, HttpResponse } from "msw";
import { Provider } from "react-redux";
import { server } from "../mocks";
import { apiUrl } from "../mocks/handlers";
import { store } from "../store";
import AppRouter from ".";

describe("Given the AppRouter component", () => {
  const submitAddGame = async () => {
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

  describe("When rendered at /games", () => {
    const gamesRoute = "/games";

    test("Then it should show 'Games' inside a heading", () => {
      render(
        <MemoryRouter initialEntries={[gamesRoute]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /games/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Subnautica' and 'Minecraft' inside a heading", async () => {
      const subnauticaTitle = /subnautica/i;
      const minecraftTitle = /minecraft/i;

      render(
        <MemoryRouter initialEntries={[gamesRoute]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const subnauticaHeading = await screen.findByRole("heading", {
        name: subnauticaTitle,
      });

      const minecraftHeading = await screen.findByRole("heading", {
        name: minecraftTitle,
      });

      expect(subnauticaHeading).toBeInTheDocument();
      expect(minecraftHeading).toBeInTheDocument();
    });

    test("Then it should show two images with alternatives text 'Subnautica cover' and 'Minecraft cover'", async () => {
      render(
        <MemoryRouter initialEntries={[gamesRoute]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const subnauticaImage = await screen.findByAltText(/subnautica cover/i);
      const minecraftImage = await screen.findByAltText(/minecraft cover/i);

      expect(subnauticaImage).toBeInTheDocument();
      expect(minecraftImage).toBeInTheDocument();
    });

    test("Then it shold show a loading spinner", () => {
      render(
        <MemoryRouter initialEntries={[gamesRoute]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const loading = screen.getByLabelText(/loading/i);

      expect(loading).toBeInTheDocument();
    });

    describe("And fails the fetch of games requeset", () => {
      test("Then it should show a alert with the message 'Failed loading games'", async () => {
        server.use(
          http.get(`${apiUrl}/games`, () => {
            return HttpResponse.json(null, {
              status: 500,
            });
          }),
        );

        render(
          <MemoryRouter initialEntries={[gamesRoute]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const errorAlert = await screen.findByText(/failed loading games/i);

        expect(errorAlert).toBeInTheDocument();
      });
    });
  });

  describe("When rendered at /james", () => {
    const badRoute = "/james";

    test("Then it should show 'Page not found' inside a heading", async () => {
      render(
        <MemoryRouter initialEntries={[badRoute]}>
          <AppRouter />
        </MemoryRouter>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: /page not found/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show a image with alternative text 'Error 404 not found'", async () => {
      render(
        <MemoryRouter initialEntries={[badRoute]}>
          <AppRouter />
        </MemoryRouter>,
      );

      const errorImage = await screen.findByAltText(/error 404 not found/i);

      expect(errorImage).toBeInTheDocument();
    });
  });

  describe("When rendered at /add-game", () => {
    test("Then it should show 'Add game' inside a heading", () => {
      render(
        <MemoryRouter initialEntries={["/add-game"]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /add game/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("And the user submits the form with the game 'Counter Strike' and already exists in data base", () => {
    test("Then it should show a message 'Failed creating game'", async () => {
      server.use(
        http.post(`${apiUrl}/games`, () => {
          return HttpResponse.json(
            {
              message: "Failed creating game",
            },
            {
              status: 409,
            },
          );
        }),
      );

      render(
        <MemoryRouter initialEntries={["/add-game"]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      await submitAddGame();

      const errorAlert = await screen.findByText(/failed creating game/i);

      expect(errorAlert).toBeInTheDocument();
    });
  });

  describe("When the user navigates to Add game", () => {
    test("Then it should show 'Add game' inside a heading", async () => {
      const user = userEvent.setup();

      render(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const addGameLink = screen.getByRole("link", {
        name: /add game/i,
      });

      await user.click(addGameLink);

      const pageTitle = screen.getByRole("heading", {
        name: /add game/i,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
