import { serve } from "https://deno.land/std@0.175.0/http/server.ts";
import a from "../a.json" assert { type: "json" };

serve(() => new Response("a" + a.a))
