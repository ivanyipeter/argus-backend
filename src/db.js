import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;  // Supabase URL
const supabaseKey = process.env.SUPABASE_KEY;  // Backend kulcs

// Supabase client létrehozása
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;