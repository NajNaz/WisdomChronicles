import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jeqhlsdscjxbproorxvr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcWhsc2RzY2p4YnByb29yeHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyODcxNzUsImV4cCI6MjAwODg2MzE3NX0.sIrj7DFmleaCk-NlZGE4t6nl1U0Y_p5jHAKlawNvxbQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
