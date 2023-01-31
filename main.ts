import { serve } from "https://deno.land/std@0.175.0/http/server.ts";
import m from "./import_map.json" assert { type: "json" };

serve(() => new Response("a" + typeof m))
