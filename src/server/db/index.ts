// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

import { env } from "@/env.js";
import * as schema from "./schema";

// export const db = drizzle(postgres(env.DATABASE_URL), { schema });

const pool = new Pool({ connectionString: env.DATABASE_URL });
export const db = drizzle(pool, { schema });
