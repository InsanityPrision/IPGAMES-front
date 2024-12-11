import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../../store";
import AppRouter from "../../router";
import { server } from "../../mocks";
import { http, HttpResponse } from "msw";
import { apiUrl } from "../../mocks/handlers";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show 'IPGAMES'", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const ipgamesTitle = screen.getByText(/ipgames/i);

      expect(ipgamesTitle).toBeInTheDocument();
    });

    test("Then it should show a link 'Home'", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: /home/i,
      });

      expect(homeLink).toBeInTheDocument();
    });
  });

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
            return new HttpResponse(null, {
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

        const failedAlert =
          await screen.findByLabelText(/failed loading games/i);

        expect(failedAlert).toBeInTheDocument();
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
});
