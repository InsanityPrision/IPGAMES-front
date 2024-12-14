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
