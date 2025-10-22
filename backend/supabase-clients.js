const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://isebdyjxkcfmaxyxvaqp.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZWJkeWp4a2NmbWF4eXh2YXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNzU3ODUsImV4cCI6MjA3NjY1MTc4NX0.pF1Uk5Diiz2KAhHzkyQ_xLeijGH1maFkPQIRN2QQNdY';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;