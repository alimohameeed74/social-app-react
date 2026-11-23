export default function LikeCardLoader() {
  return (
    <div className="mt-3 w-fit animate-pulse rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2">
          <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200" />

          <div className="min-w-0 space-y-2">
            <div className="h-3.5 w-24 rounded bg-slate-200" />
            <div className="h-3 w-20 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
