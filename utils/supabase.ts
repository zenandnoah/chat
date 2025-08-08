import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nbqtgwywogiavgkuchef.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icXRnd3l3b2dpYXZna3VjaGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzUyNTAsImV4cCI6MjA3MDI1MTI1MH0.c-XIH4SoapzayrjKjiAZ9bM7YfsWhLMBeFPWhty7ah0"
export const supabase = createClient(supabaseUrl, supabaseKey)