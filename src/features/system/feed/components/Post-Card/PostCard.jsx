export default function PostCard() {
  return (
    <article className="mb-3 rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <a className="shrink-0" href="/main/profile/6afcb1c9fbc846000b496cff">
            <img
              className="h-11 w-11 rounded-full object-cover"
              alt="fady Alla"
              src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
            />
          </a>

          <div className="min-w-0 flex-1">
            <a
              className="truncate text-sm font-bold text-foreground hover:underline"
              href="/main/profile/6afcb1c9fbc846000b496cff"
            >
              fady Alla
            </a>

            <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              @fadyallla ·
              <button
                type="button"
                className="rounded px-0.5 py-0.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 hover:underline"
              >
                17s
              </button>
              <span className="mx-1">·</span>
              <span className="relative inline-flex items-center">
                <span className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 hover:bg-slate-100">
                  <i className="fa-globe fa-solid"></i>
                  public
                </span>
              </span>
              <div className="hidden items-center gap-1 rounded-full bg-[#e7f3ff] px-2.5 py-1 text-[11px] font-bold text-[#1877f2]">
                <i className="fa-solid fa-bookmark"></i>
              </div>
            </div>
          </div>

          <div className="relative flex">
            <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <i className="fa-regular fa-bookmark"></i>
            </button>

            <button className="rounded-md px-2 py-1 text-xs font-bold text-gray-400 transition hover:text-red-500">
              <i className="fa-solid fa-trash"></i>
            </button>

            <button className="rounded-md px-2 py-1 text-xs font-bold text-gray-400 transition hover:text-green-500">
              <i className="fa-solid fa-edit"></i>
            </button>
          </div>
        </div>

        <div className="mt-3 hidden">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground"></p>
        </div>
      </div>

      <div className="hidden max-h-155 overflow-hidden border-y border-slate-200">
        <button
          type="button"
          className="group relative block w-full cursor-zoom-in"
        >
          <img alt="postImage" className="w-full object-cover" src="" />
          <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
        </button>
      </div>

      <div className="mx-4 my-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="p-3">
          <div className="mb-2 flex items-center gap-2">
            <img
              className="h-9 w-9 rounded-full object-cover"
              alt="joo"
              src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
            />

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900">joo</p>
              <p className="truncate text-xs text-slate-500">@joo3</p>
            </div>

            <button className="ml-auto inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]">
              Original Post
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>

          <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
            لالالالالالالالالالالالالاووووووووووو
          </p>
        </div>
      </div>

      <div className="px-4 pb-2 pt-3 text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
              <i className="fa-solid fa-thumbs-up text-xs"></i>
            </span>

            <button
              type="button"
              className="cursor-pointer font-semibold transition hover:text-[#1877f2] hover:underline"
            >
              0 likes
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <i className="fa-solid fa-repeat"></i>0 shares
            </span>

            <span>0 comments</span>

            <button className="cursor-pointer rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff] hover:underline">
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-4 border-t border-slate-200"></div>

      <div className="grid grid-cols-3 gap-1 p-1">
        <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm">
          <i className="fa-regular fa-thumbs-up"></i>
          <span>Like</span>
        </button>

        <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </button>

        <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm">
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </button>
      </div>
    </article>
  );
}
