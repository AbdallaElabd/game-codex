"use client";

import { useState } from "react";
import { Waypoint } from "react-waypoint";

import { ImageWithPlaceholder } from "@/components/image-with-placeholder";
import { RatingStars } from "@/components/rating-stars";
import { Spinner } from "@/components/spinner";
import { Game } from "@/types/rawg-types";
import { formatDate } from "@/utils/date";

export const GamesList = ({
  games,
  nextParams,
}: {
  games: Game[];
  nextParams: string | null;
}) => {
  const [gamesList, setGamesList] = useState(games);
  const [nextPageParams, setNextPageParams] = useState(nextParams);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = async () => {
    if (!nextPageParams) return;
    try {
      setIsLoading(true);
      const res = await fetch(`./api/games?${nextPageParams}`);
      const response: {
        results: Game[];
        nextParams: string | null;
      } = await res.json();
      setGamesList([...gamesList, ...response.results]);
      setNextPageParams(response.nextParams);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gamesList.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
      {isLoading && (
        <div className="mx-auto p-4">
          <Spinner />
        </div>
      )}
      <Waypoint onEnter={loadMore} />
    </div>
  );
};

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div key={game.id} className="flex flex-col gap-2">
      <div className="h-64 w-full overflow-hidden rounded-lg">
        <ImageWithPlaceholder
          key={game.id}
          src={game.background_image}
          alt={game.name}
        />
      </div>
      <h2 className="text-2xl font-thin">{game.name}</h2>
      <div className="flex w-full flex-col text-gray-400">
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Released: {formatDate(game.released)}</p>
        <div className="flex gap-1">
          <span>Rating:</span>
          <RatingStars rating={Number(game.rating)} />
        </div>
      </div>
    </div>
  );
};
