import { EndpointResponse } from "@/types/endpoint-response";
import { Game } from "@/types/rawg-types";

import { env } from "../env.mjs";

export const getGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${env.API_KEY}`
  );
  const games: EndpointResponse<Game[]> = await response.json();
  return games;
};
