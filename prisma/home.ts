import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getRandomCourses() {

  const allCourseIds = await prisma.course.findMany({
    select: { id: true },
    take: 100 // Adjust based on your data size
  });
  const shuffledIds = allCourseIds.sort(() => 0.5 - Math.random()).map(course => course.id);

  const randomCourses = await prisma.course.findMany({
    where: {
      id: { in: shuffledIds.slice(0, 7) }
    }
  });

  
  return randomCourses;
}

// Example usage


