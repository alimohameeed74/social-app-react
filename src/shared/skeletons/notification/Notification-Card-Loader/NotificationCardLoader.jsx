export default function NotificationCardLoader() {
  return (
    <article className="relative flex gap-3 rounded-xl border border-[#dbeafe] mb-4 p-3 sm:rounded-2xl sm:p-4 bg-white animate-pulse">
      <div className="relative shrink-0">
        <div className="h-11 w-11 rounded-full bg-gray-200" />

        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-gray-300 ring-2 ring-white" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 py-1">
            <div className="h-3.5 w-24 rounded-full bg-gray-200" />
            <div className="h-3 w-28 rounded-full bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-7 rounded-full bg-gray-200" />
            <div className="h-6 w-7 rounded-md bg-gray-200" />
          </div>
        </div>

        <div className="mt-2 space-y-2">
          <div className="h-3 w-full max-w-64 rounded-full bg-gray-200" />
          <div className="h-3 w-2/3 max-w-48 rounded-full bg-gray-200" />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="h-7 w-28 rounded-md bg-gray-200" />
        </div>
      </div>
    </article>
  );
}
