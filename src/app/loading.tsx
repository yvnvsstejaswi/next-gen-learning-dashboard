export default function Loading() {
  return (
    <div className="p-10 animate-pulse">
      <div className="h-32 bg-zinc-800 rounded-3xl mb-6"></div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="h-40 bg-zinc-800 rounded-3xl"></div>
        <div className="h-40 bg-zinc-800 rounded-3xl"></div>
        <div className="h-40 bg-zinc-800 rounded-3xl"></div>
      </div>
    </div>
  );
}