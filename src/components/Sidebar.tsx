import {
  LayoutDashboard,
  BookOpen,
  Activity,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:block relative w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-white">
        LearnHub
      </h1>

      <nav className="mt-8 space-y-6 text-zinc-300">

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white cursor-pointer transition-all duration-300">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white cursor-pointer transition-all duration-300">
          <BookOpen size={18} />
          <span>Courses</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white cursor-pointer transition-all duration-300">
          <Activity size={18} />
          <span>Activity</span>
        </div>

      </nav>
    </aside>
  );
}