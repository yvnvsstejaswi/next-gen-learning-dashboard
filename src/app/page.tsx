import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";
import { supabase } from "@/lib/supabase";
import { Course } from "@/types/course";

export default async function Home() {
  const { data: courses } = await supabase
  .from("courses")
  .select("*");

  const courseData = courses as Course[];

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6">
        <HeroTile />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {courseData?.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}

          <ActivityTile />
        </div>
      </section>
    </main>
  );
}