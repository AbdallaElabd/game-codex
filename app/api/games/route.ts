import { NextResponse } from "next/server";
import { z } from "zod";

import { getGames } from "@/utils/requests";

export async function GET(request: Request) {
  const pageParameter = new URL(request.url).searchParams.get("page");
  const page = z.coerce.number().catch(0).parse(pageParameter);
  return NextResponse.json(await getGames(page));
}
