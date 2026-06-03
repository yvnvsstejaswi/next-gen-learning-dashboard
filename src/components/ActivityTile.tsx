export default function ActivityTile() {
  const days = [40, 70, 20, 90, 50, 80, 30];

  return (
    <article className="bg-zinc-900 rounded-3xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        Weekly Activity
      </h3>

      <div className="flex items-end gap-3 h-32">
        {days.map((height, index) => (
          <div
            key={index}
            style={{ height: `${height}%` }}
            className="flex-1 rounded bg-cyan-500"
          />
        ))}
      </div>
    </article>
  );
}