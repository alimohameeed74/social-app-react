export default function PostCardLoader() {
  return (
    <article className="my-3 animate-pulse rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 shrink-0 rounded-full bg-slate-200" />

          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-28 rounded bg-slate-200" />

            <div className="flex items-center gap-2">
              <div className="h-3 w-20 rounded bg-slate-200" />
              <div className="h-3 w-8 rounded bg-slate-200" />
              <div className="h-3 w-14 rounded bg-slate-200" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-slate-200" />
            <div className="h-8 w-8 rounded-md bg-slate-200" />
            <div className="h-8 w-8 rounded-md bg-slate-200" />
          </div>
        </div>

        {/* Post Body */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-4/5 rounded bg-slate-200" />
        </div>
      </div>

      {/* Engagement Statistics */}
      <div className="px-4 pb-2 pt-3">
        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-20 rounded bg-slate-200" />

          <div className="flex items-center gap-3">
            <div className="h-4 w-14 rounded bg-slate-200" />
            <div className="h-4 w-16 rounded bg-slate-200" />
          </div>
        </div>
      </div>

      <div className="mx-4 border-t border-slate-200" />

      {/* Post Actions */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 rounded-md p-3"
          >
            <div className="h-4 w-4 rounded-full bg-slate-200" />
            <div className="h-3 w-12 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </article>
  );
}
