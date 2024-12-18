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
          date: "",
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
          date: "",
          genders: [],
          imageUrl: "",
          imageAlt: "Minecraft cover",
        },
      ],
    });
  }),
  http.post(`${apiUrl}/games`, () => {
    return HttpResponse.json({
      game: {
        name: "Outer Wilds",
        price: 22.99,
        isFree: false,
        rate: 5,
        description:
          "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
        developer: "Mobius Digital",
        date: "2020-05-18T00:00:00.000Z",
        genders: ["Horror", "Adventure"],
        imageUrl: "/outerwilds.webp",
        imageAlt: "Outer Wilds cover",
        _id: "675f26f9a8e171c225f161d0",
        __v: 0,
      },
    });
  }),
  http.delete(`${apiUrl}/games/675f26f9a8e171c225f161d0`, () => {
    return HttpResponse.json({
      game: {
        name: "Outer Wilds",
        price: 22.99,
        isFree: false,
        rate: 5,
        description:
          "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
        developer: "Mobius Digital",
        date: "2020-05-18T00:00:00.000Z",
        genders: ["Horror", "Adventure"],
        imageUrl: "/outerwilds.webp",
        imageAlt: "Outer Wilds cover",
        _id: "675f26f9a8e171c225f161d0",
        __v: 0,
      },
    });
  }),
  http.get(`${apiUrl}/games/:_id`, () => {
    return HttpResponse.json({
      game: {
        name: "Outer Wilds",
        price: 22.99,
        isFree: false,
        rate: 5,
        description:
          "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
        developer: "Mobius Digital",
        date: "2020-05-18T00:00:00.000Z",
        genders: ["Horror", "Adventure"],
        imageUrl: "/outerwilds.webp",
        imageAlt: "Outer Wilds cover",
        _id: "675f26f9a8e171c225f161d0",
        __v: 0,
      },
    });
  }),
];
