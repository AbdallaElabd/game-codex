import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_KEY: z.string(),
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY,
  },
});
