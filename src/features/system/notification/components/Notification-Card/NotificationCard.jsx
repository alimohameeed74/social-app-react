import { getTimeAgo } from "../../../../../shared/utils/date";

export default function NotificationCard({
  notification: { actor, type, isRead, entity, createdAt },
  update,
}) {
  return (
    <article
      className={`group relative flex gap-3 rounded-xl border mb-4 p-3 transition sm:rounded-2xl sm:p-4 border-[#dbeafe] ${!isRead ? "bg-[#edf4ff]" : "bg-white"}`}
    >
      <div className="relative shrink-0">
        <button type="button" className="block cursor-pointer">
          <img
            className="h-11 w-11 rounded-full object-cover"
            alt={actor.name}
            src={actor.photo}
          />
        </button>
        <span className="absolute text-xs -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-white text-emerald-600">
          {type === "like_post" ? (
            <>
              <i className="fa-heart fa-regular text-red-600"></i>
            </>
          ) : type === "comment_post" ? (
            <>
              <i class="fa-comment fa-regular text-blue-500"></i>
            </>
          ) : type === "share_post" ? (
            <>
              <i class="fa-crop-simple fa-solid text-green-500"></i>
            </>
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-1.5 sm:gap-2">
          <p className="text-sm leading-6 text-slate-800">
            <button
              type="button"
              className="font-extrabold hover:text-[#1877f2] hover:underline me-1"
            >
              {actor.name}
            </button>

            {type === "share_post" ? (
              <span>shared your post</span>
            ) : type === "comment_post" ? (
              <span>commented on your post</span>
            ) : type === "like_post" ? (
              <span>liked your post</span>
            ) : (
              <></>
            )}
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-semibold text-slate-500">
              {getTimeAgo(createdAt)}
            </span>
            <button className="rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]">
              <i className="fa-solid fa-eye"></i>
            </button>
            {!isRead ? (
              <i className="fa-solid fa-circle text-[#1877f2] inline text-[4px]"></i>
            ) : (
              <></>
            )}
          </div>
        </div>
        {entity.body ? (
          <p className="mt-0.5 text-sm text-slate-600">{entity.body}</p>
        ) : (
          <></>
        )}
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={update}
            className="items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-[#1877f2] ring-1 ring-[#dbeafe] transition hover:bg-[#e7f3ff] inline-flex"
          >
            <i className="fa-check fa-solid"></i> Mark as read
          </button>
          {isRead ? (
            <span className="items-center gap-1.5 text-xs font-semibold text-emerald-600 hidden">
              <i className="fa-solid fa-check"></i> Read
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </article>
  );
}
