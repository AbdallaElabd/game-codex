import { getGames } from "@/lib/requests";

import { GamesList } from "./games-list";

export default async function Page() {
  const gamesResponse = await getGames();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-thin">Games:</h1>
      <GamesList games={gamesResponse.results} next={gamesResponse.next} />
    </div>
  );
}
