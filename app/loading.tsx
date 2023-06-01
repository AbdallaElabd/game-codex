export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-thin">Games:</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }, (_, i) => i).map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <div className="h-full w-full animate-pulse bg-gray-400"></div>
            </div>
            <h2 className="text-2xl font-thin">
              <div className="h-8 w-1/3  animate-pulse rounded-md bg-gray-400"></div>
            </h2>
            <div className="flex w-full flex-col gap-1 text-gray-400">
              <div className="h-5 w-1/2 animate-pulse rounded-md bg-gray-400"></div>
              <div className="h-5 w-1/2 animate-pulse rounded-md bg-gray-400"></div>
              <div className="h-5 w-1/2 animate-pulse rounded-md bg-gray-400"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
