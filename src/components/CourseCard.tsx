"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Sparkles,
} from "lucide-react";

const icons: any = {
  Code,
  Rocket,
  FileCode,
  Sparkles,
};

export default function CourseCard({ course, index }: any) {
  const Icon = icons[course.icon_name];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        bg-zinc-900
        rounded-3xl
        p-6
        border
        border-zinc-800
        hover:border-cyan-500/50
        hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
        transition-all
        duration-300
        "
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon
            size={24}
            className="text-cyan-400"
          />
        )}

        <h3 className="text-white font-semibold">
          {course.title}
        </h3>
      </div>

      <div className="mt-5 h-2 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{ duration: 1 }}
          className="h-full bg-cyan-500"
        />
      </div>

      <p className="text-zinc-400 mt-3">
        {course.progress}% Complete
      </p>
    </motion.article>
  );
}