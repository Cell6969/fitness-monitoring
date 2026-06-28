import { createClient } from "@supabase/supabase-js";
//#region src/lib/supabase.ts
var supabase = createClient("https://vpfejmmgxdvyqiodbskl.supabase.co", "sb_publishable_BeskZ_oxc6uO9X4jr4Ix0w_gXMMPouJ");
//#endregion
export { supabase as t };
