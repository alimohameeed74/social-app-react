import { Button } from "flowbite-react";

export default function SuggestedFriendCard({ suggestion }) {
  return (
    <div className="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col mb-2">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50 cursor-pointer"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            alt={suggestion.name}
            src={suggestion.photo}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900 hover:underline">
              {suggestion.name}
            </p>
            <p className="truncate text-xs text-slate-500">
              @{suggestion.username}
            </p>
          </div>
        </button>
        <Button className="inline-flex! items-center! gap-1! rounded-full! border-0! bg-[#e7f3ff]! px-3! py-1! text-xs! font-bold! text-[#1877f2]! transition! hover:bg-[#d8ebff]! disabled:opacity-50! cursor-pointer!">
          <i className="fa-solid fa-user-plus"></i>
          Follow
        </Button>
      </div>
      <div className="mt-2 flex items-center gap-2 text-[11px] font-normal">
        <span className="rounded-full text-gray-500 bg-gray-200 px-2 py-0.5">
          {suggestion.followersCount} followers
        </span>
        <span className="rounded-full bg-[#edf4ff] px-2 py-0.5 text-[#1877f2] hidden">
          {suggestion.mutualFollowersCount} mutuals
        </span>
      </div>
    </div>
  );
}
