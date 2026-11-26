import { useContext, useState } from "react";
import { authContext } from "../../../../../shared/contexts/AuthContext/AuthContext";
import { getTimeAgo } from "../../../../../shared/utils/date";
import CommentReplies from "../Comment-Replies/CommentReplies";

export default function CommentCard({
  comment: {
    _id: commentId,
    content,
    commentCreator,
    repliesCount,
    likes,
    image,
    createdAt,
    post,
  },
}) {
  const {
    loggedUser: { _id },
  } = useContext(authContext);
  const [showReplies, setShowReplies] = useState(false);

  function toggleCommentReplies() {
    setShowReplies(!showReplies);
  }
  return (
    <>
      <div className="relative flex items-start gap-2 mb-2">
        <img
          className="mt-0.5 h-8 w-8 rounded-full object-cover"
          alt={commentCreator.name}
          src={commentCreator.photo}
        />
        <div className="min-w-0 flex-1">
          <div className="relative max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-slate-900">
                  {commentCreator._id === _id
                    ? `${commentCreator.name} (You)`
                    : commentCreator.name}
                </p>
                <p className="text-xs text-slate-500">
                  @{commentCreator.username}
                </p>
              </div>
              <div className="flex">
                {commentCreator._id === _id ? (
                  <>
                    <button className="cursor-pointer text-xs me-1 ">
                      <i className="fa-solid fa-trash hover:text-red-500 text-gray-400"></i>
                    </button>
                    <button className="cursor-pointer text-xs ">
                      <i className="fa-solid fa-edit text-gray-400 hover:text-green-500"></i>
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {content ? (
              <p className="mt-1 whitespace-pre-wrap text-sm text-slate-800 truncate">
                {content}
              </p>
            ) : (
              <></>
            )}
            {image ? (
              <img
                alt="Reply"
                className="mt-1.5 max-h-44 w-full rounded-md object-cover"
                src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linked-posts/1795555672070-a0b77b98-b4ec-4356-bd31-ad3e2c310705-avatar-1.webp"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="mt-1.5 flex items-center justify-between px-1">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-400">
                {getTimeAgo(createdAt)}
              </span>
              <button className="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">
                Like ({likes.length})
              </button>
              <button
                onClick={toggleCommentReplies}
                className="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500"
              >
                {showReplies ? "Hide Replies" : ` Reply (${repliesCount})`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showReplies ? (
        <CommentReplies
          postId={post}
          commentId={commentId}
          commentCreator={commentCreator}
        />
      ) : (
        <></>
      )}
    </>
  );
}
