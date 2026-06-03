"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div>
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="text-zinc-400 mt-2">
          {error.message}
        </p>
      </div>
    </div>
  );
}