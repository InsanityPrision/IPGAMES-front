import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { http, HttpResponse } from "msw";
import { Provider } from "react-redux";
import { server } from "../mocks";
import { apiUrl } from "../mocks/handlers";
import { store } from "../store";
import AppRouter from ".";
import { submitAddGame } from "../game/components/AddGame/__tests__/submitAddGame";

describe("Given the AppRouter component", () => {
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

    describe("And the user submits the form with the game 'Outer Wilds'", () => {
      test("Then it should show a message 'Game created'", async () => {
        server.use(
          http.post(`${apiUrl}/games`, () => {
            return HttpResponse.json(
              {
                game: {
                  name: "Outer Wilds",
                  price: 22.99,
                  isFree: false,
                  rate: 5,
                  description:
                    "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
                  developer: "Mobius Digital",
                  date: "2020-05-17T22:00:00.000Z",
                  genders: ["Horror", "Adventure"],
                  imageUrl: "/outerwilds.webp",
                  imageAlt: "Outer Wilds cover",
                  _id: "675ff5d4951e3eec8fe8239f",
                  __v: 0,
                },
              },
              {
                status: 201,
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

        const succesAlert = await screen.findByText(/game created/i);

        expect(succesAlert).toBeInTheDocument();
      });
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
