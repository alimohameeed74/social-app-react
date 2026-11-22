export default function SuggestionCardLoader() {
  return (
    <div
      role="status"
      className="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col mb-2 animate-pulse"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 px-1 py-1">
          <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />

          <div className="min-w-0 space-y-2">
            <div className="h-3 w-24 rounded-full bg-gray-200" />
            <div className="h-2.5 w-16 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="h-7 w-20 rounded-full bg-gray-200" />
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="h-5 w-24 rounded-full bg-gray-200" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
