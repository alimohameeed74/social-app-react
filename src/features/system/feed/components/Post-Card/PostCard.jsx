import { useContext, useState } from "react";
import { getTimeAgo } from "../../../../../shared/utils/date";
import { authContext } from "../../../../../shared/contexts/AuthContext/AuthContext";
import LikesModal from "../../../../../shared/components/Likes-Modal/LikesModal";
import PostComments from "../Post-Comments/PostComments";

export default function PostCard({
  post: {
    _id,
    user,
    createdAt,
    privacy,
    bookmarked,
    body,
    image,
    sharedPost,
    likesCount,
    commentsCount,
    sharesCount,
    topComment,
  },
  details,
}) {
  const { loggedUser } = useContext(authContext);
  const [openLikesModal, setOpenLikesModel] = useState(false);
  const [showPostComments, setShowPostComments] = useState(false);

  function openModal() {
    setOpenLikesModel(true);
  }
  function closeModal() {
    setOpenLikesModel(false);
  }

  function toggleComments() {
    setShowPostComments(!showPostComments);
  }
  return (
    <>
      <article className="mb-3 rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <a
              className="shrink-0"
              href="/main/profile/6afcb1c9fbc846000b496cff"
            >
              <img
                className="h-11 w-11 rounded-full object-cover"
                alt={user.name}
                src={user.photo}
              />
            </a>

            <div className="min-w-0 flex-1">
              <a
                className="truncate text-sm font-bold text-foreground hover:underline"
                href="/main/profile/6afcb1c9fbc846000b496cff"
              >
                {user.name}
              </a>

              <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                @{user.username} ·
                <span className="rounded cursor-pointer px-0.5 py-0.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 hover:underline">
                  {getTimeAgo(createdAt)}
                </span>
                <span className="mx-1">·</span>
                <span className="relative inline-flex items-center">
                  <span className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 hover:bg-slate-100">
                    <i className="fa-globe fa-solid"></i>
                    {privacy}
                  </span>
                </span>
                {bookmarked ? (
                  <div className=" items-center gap-1 rounded-full bg-[#e7f3ff] px-2.5 py-1 text-[11px] font-bold text-[#1877f2]">
                    <i className="fa-solid fa-bookmark"></i>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="relative flex">
              <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <i className="fa-regular fa-bookmark"></i>
              </button>

              {loggedUser._id === user._id ? (
                <>
                  <button className="rounded-md px-2 py-1 text-xs font-bold text-gray-400 transition hover:text-red-500">
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  <button className="rounded-md px-2 py-1 text-xs font-bold text-gray-400 transition hover:text-green-500">
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          {body ? (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground truncate">
              {body}
            </p>
          ) : (
            <></>
          )}
        </div>

        {image ? (
          <div className="max-h-155 overflow-hidden border-y border-slate-200">
            <button
              type="button"
              className="group relative block w-full cursor-zoom-in"
            >
              <img
                alt="postImage"
                className="w-full object-cover"
                src={image}
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
            </button>
          </div>
        ) : (
          <></>
        )}

        {/* sharedPost */}
        {sharedPost ? (
          <div className="mx-4 my-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <div className="p-3">
              <div className="mb-2 flex items-center gap-2">
                <img
                  className="h-9 w-9 rounded-full object-cover"
                  alt={sharedPost.user.name}
                  src={sharedPost.user.photo}
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900">
                    {sharedPost.user.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    @{sharedPost.user.username}
                  </p>
                </div>

                <button className="ml-auto inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]">
                  <span className="hidden sm:inline">Original Post</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>

              <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                {sharedPost.body}
              </p>
              {sharedPost.image ? (
                <div className="max-h-155 overflow-hidden border-y border-slate-200">
                  <button
                    type="button"
                    className="group relative block w-full cursor-zoom-in"
                  >
                    <img
                      alt="sharedPostImage"
                      className="w-full object-cover"
                      src={sharedPost.image}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="px-4 pb-2 pt-3 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
                <i className="fa-solid fa-thumbs-up text-xs"></i>
              </span>

              <button
                onClick={openModal}
                type="button"
                className="cursor-pointer font-semibold transition hover:text-[#1877f2] hover:underline"
              >
                {likesCount} likes
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
              <span className="inline-flex items-center gap-1">
                <i className="fa-solid fa-repeat"></i>
                {sharesCount} shares
              </span>

              <span>{commentsCount} comments</span>

              {details ? (
                <button className="cursor-pointer rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff] hover:underline">
                  <i className="fa-regular fa-eye"></i>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="mx-4 border-t border-slate-200"></div>

        <div className="grid grid-cols-3 gap-1 p-1">
          <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm">
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Like</span>
          </button>

          <button
            onClick={toggleComments}
            className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm"
          >
            <i className="fa-regular fa-comment"></i>
            <span>Comment</span>
          </button>

          <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </button>
        </div>

        {/* Top Comment */}
        {topComment && !showPostComments ? (
          <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">
              Top Comment
            </p>
            <div className="flex items-start gap-2">
              <img
                className="h-8 w-8 rounded-full object-cover"
                alt={topComment.commentCreator.name}
                src={topComment.commentCreator.photo}
              />
              <div className="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
                <p className="truncate text-xs font-bold text-slate-900">
                  {topComment.commentCreator._id === loggedUser._id
                    ? `${topComment.commentCreator.name} (You)`
                    : topComment.commentCreator.name}
                </p>
                <p className="mt-0.5 whitespace-pre-wrap text-sm text-slate-700 truncate">
                  {topComment.content}
                </p>
              </div>
            </div>
            <button
              onClick={toggleComments}
              className="mt-2 text-xs font-bold text-[#1877f2] hover:underline"
            >
              View all comments
            </button>
          </div>
        ) : (
          <></>
        )}

        {/* All Post Comments */}
        {showPostComments ? <PostComments postId={_id} /> : <></>}
      </article>

      {openLikesModal ? <LikesModal id={_id} close={closeModal} /> : <></>}
    </>
  );
}
