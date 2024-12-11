import { http, HttpResponse } from "msw";
import { Game } from "../game/types";

export const apiUrl = import.meta.env.VITE_API_REST_URL;

if (!apiUrl) {
  throw new Error("Missing env variable VITE_API_REST_URL");
}

export const handlers = [
  http.get(`${apiUrl}/games`, () => {
    return HttpResponse.json<{ games: Game[] }>({
      games: [
        {
          _id: "1rqwasd",
          name: "Subnautica",
          price: 25,
          isFree: false,
          rate: 3,
          description: "",
          developer: "",
          date: new Date(),
          genders: [],
          imageUrl: "",
          imageAlt: "Subnautica cover",
        },
        {
          _id: "12azxcq",
          name: "Minecraft",
          price: 30,
          isFree: false,
          rate: 5,
          description: "",
          developer: "",
          date: new Date(),
          genders: [],
          imageUrl: "",
          imageAlt: "Minecraft cover",
        },
      ],
    });
  }),
];
