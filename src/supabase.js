import { createClient } from '@supabase/supabase-client';

// Replace the strings below with the ones you just copied
const supabaseUrl = 'https://ofklrkujpyqejlefhyfn.supabase.co' ;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ma2xya3VqcHlxZWpsZWZoeWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MzA0NTIsImV4cCI6MjA5MDEwNjQ1Mn0.ZSJsQgSGtRLQJ7AShtRE7PyDX-HC84iqDD0YVBdiVcI';

export const supabase = createClient(supabaseUrl, supabaseKey);