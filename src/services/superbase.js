import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ghleuzyypngscrropsyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobGV1enl5cG5nc2Nycm9wc3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NzM3MjgsImV4cCI6MjAzMzQ0OTcyOH0.0Bj015mmfdp2Z8JWSn8ibdlt2Ied82upSdldKMcecCc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
