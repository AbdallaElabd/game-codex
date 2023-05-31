import { getGames } from "@/api/requests";
import { ImageWithPlaceholder } from "@/components/image-with-placeholder";
import { RatingStars } from "@/components/rating-stars";
import { formatDate } from "@/lib/date";
import { Game } from "@/types/rawg-types";

export default async function Page() {
  const games = await getGames();
  return (
    <div className="p-4">
      <h1 className="text-4xl font-thin">Games:</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.results.map((game: any) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export const GameCard = ({ game }: { game: Game }) => {
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
      <div className="flex w-full flex-col gap-1 text-gray-400">
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
