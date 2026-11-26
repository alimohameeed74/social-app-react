export default function ReplyCardLoader() {
  return (
    <div className="relative flex items-start gap-2 mb-2 animate-pulse">
      <div className="h-6 w-6 rounded-full bg-slate-200 shrink-0"></div>

      <div className="min-w-0 flex flex-col">
        <div className="inline-block max-w-full rounded-2xl bg-slate-100 px-2.5 py-2">
          <div className="flex justify-between items-center gap-8">
            <div className="h-3 w-20 rounded bg-slate-200"></div>
            <div className="h-3 w-3 rounded bg-slate-200"></div>
          </div>

          <div className="mt-1 h-2 w-8 rounded bg-slate-200"></div>

          <div className="mt-2 space-y-1">
            <div className="h-3 w-36 rounded bg-slate-200"></div>
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <div className="h-3 w-14 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
