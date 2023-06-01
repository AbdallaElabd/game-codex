import { env } from "@/env.mjs";
import { EndpointResponse } from "@/types/endpoint-response";
import { Game } from "@/types/rawg-types";

const getNextPageParams = (next: string | null) => {
  if (!next) {
    return null;
  }
  const nextSearchParameters = new URLSearchParams((next ?? "")?.split("?")[1]);
  // Remove the private key from the next url
  nextSearchParameters.delete("key");
  return nextSearchParameters.toString();
};

export const getGames = async (page = 0) => {
  const params = new URLSearchParams();
  params.set("key", env.API_KEY);
  if (page !== 0) {
    params.set("page", page.toString());
  }
  const response = await fetch(
    `https://api.rawg.io/api/games?${params.toString()}`
  );
  const { results, count, next }: EndpointResponse<Game[]> =
    await response.json();

  return {
    results,
    count,
    nextParams: getNextPageParams(next),
  };
};
