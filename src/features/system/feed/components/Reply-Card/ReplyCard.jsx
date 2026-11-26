import { useContext } from "react";
import { getTimeAgo } from "../../../../../shared/utils/date";
import { authContext } from "../../../../../shared/contexts/AuthContext/AuthContext";

export default function ReplyCard({
  reply: { content, commentCreator, createdAt, likesCount, image },
}) {
  const {
    loggedUser: { _id },
  } = useContext(authContext);
  return (
    <div className="relative flex items-start gap-2 mb-2">
      <img
        className="h-6 w-6 rounded-full object-cover"
        alt={commentCreator.name}
        src={commentCreator.photo}
      />
      <div className="min-w-0 flex flex-col">
        <div className="inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-2.5 py-2">
          <div className="flex justify-between items-center">
            <p className="text-[11px] font-bold text-slate-900">
              {commentCreator._id === _id
                ? `${commentCreator.name} (You)`
                : commentCreator.name}
            </p>
            {_id === commentCreator._id ? (
              <div className="relative flex">
                <button className="cursor-pointer text-xs">
                  <i className="fa-solid fa-trash hover:text-red-500 text-gray-400"></i>
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <p className="text-[11px] text-slate-500">{getTimeAgo(createdAt)}</p>
          {content ? (
            <p className="mt-0.5 whitespace-pre-wrap text-xs text-slate-700">
              {content}
            </p>
          ) : (
            <></>
          )}
          {image ? (
            <img
              alt="replyPhoto"
              className="mt-1.5 max-h-44 w-full rounded-md object-cover"
              src={image}
            />
          ) : (
            <></>
          )}
          <div className="mt-1.5 flex items-center justify-between px-1">
            <button className="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">
              Like ({likesCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
