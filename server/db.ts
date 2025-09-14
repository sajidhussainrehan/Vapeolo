import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;


export const pool = new Pool({ connectionString: "postgresql://vapeolo_user:#7Urk1976@localhost:5432/vapeolo_db" });
export const db = drizzle({ client: pool, schema });
