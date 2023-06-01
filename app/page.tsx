import { getGames } from "@/utils/requests";

import { GamesList } from "./games-list";

export default async function Page() {
  const { results, nextParams } = await getGames();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-thin">Games:</h1>
      <GamesList games={results} nextParams={nextParams} />
    </div>
  );
}
