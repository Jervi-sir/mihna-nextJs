import { initSupabaseClient } from './supabase';

const supabase = initSupabaseClient();

export async function getRandomCourses(maxCourse) {
  
  const { data, error } = await supabase
    .from('Course')
    .select('*');

  if (error) {
    console.error('Error fetching random courses', error);
    return [];
  }

  return data;
}