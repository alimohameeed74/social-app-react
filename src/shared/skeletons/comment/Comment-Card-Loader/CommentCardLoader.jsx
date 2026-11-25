export default function CommentCardLoader() {
  return (
    <div className="relative flex items-start gap-2 mb-2 animate-pulse">
      {/* Profile Image */}
      <div className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-slate-200" />

      <div className="min-w-0 flex-1">
        {/* Comment Box */}
        <div className="relative max-w-full rounded-2xl bg-slate-100 px-3 py-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 space-y-2">
              <div className="h-3 w-16 rounded bg-slate-200" />
              <div className="h-2.5 w-20 rounded bg-slate-200" />
            </div>

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded bg-slate-200" />
              <div className="h-3 w-3 rounded bg-slate-200" />
            </div>
          </div>

          {/* Comment Text */}
          <div className="mt-3 space-y-2">
            <div className="h-3 w-3/4 rounded bg-slate-200" />
            <div className="h-3 w-1/2 rounded bg-slate-200" />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-2 flex items-center gap-4 px-1">
          <div className="h-3 w-7 rounded bg-slate-200" />
          <div className="h-3 w-14 rounded bg-slate-200" />
          <div className="h-3 w-16 rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
