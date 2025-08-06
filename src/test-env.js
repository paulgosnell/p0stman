// Simple test to verify environment variables
console.log('=== Environment Variable Test ===');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing');
console.log('All env vars:', Object.keys(import.meta.env));
console.log('=== End Test ===');