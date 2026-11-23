export default function LikeCard({ like: { name, username, photo } }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm w-fit mt-3">
      <div className="space-y-1">
        <a
          data-discover="true"
          className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-100"
          href="/main/profile/6afcb1c9fbc846000b496cff"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            alt={name}
            src={photo}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900">{name}</p>
            <p className="truncate text-xs text-slate-500">@{username}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
