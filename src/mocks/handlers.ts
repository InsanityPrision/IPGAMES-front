import { http, HttpResponse } from "msw";
import { Game } from "../game/types";

export const handlers = [
  http.get("http://localhost:4000/games", () => {
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
          imageAlt: "",
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
          imageAlt: "",
        },
      ],
    });
  }),
];
