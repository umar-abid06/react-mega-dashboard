import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pznorxiymjzhpbpaedpt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bm9yeGl5bWp6aHBicGFlZHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMDQ0MjksImV4cCI6MjAzMjY4MDQyOX0.L1jMc5VYEZEf67U2Xg6VVl-KXf-zmii6dSFGde87XpI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
