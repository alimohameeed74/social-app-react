import { Button } from "flowbite-react";

export default function SuggestedFriendCard() {
  return (
    <div class="border border-gray-200 p-2.5 rounded-xl bg-white flex flex-col mb-2">
      <div class="flex items-center justify-between gap-2">
        <button
          type="button"
          class="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50 cursor-pointer"
        >
          <img
            class="h-10 w-10 rounded-full object-cover"
            alt="Ahmed Abd Al-Muti"
            src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1775310477363-9f97d1ff-699a-4b66-a04f-bd6dee14d2b7-496835614_1859398661547861_5183785968671576388_n.webp"
          />
          <div class="min-w-0">
            <p class="truncate text-sm font-bold text-slate-900 hover:underline">
              {" "}
              Ahmed Abd Al-Muti{" "}
            </p>
            <p class="truncate text-xs text-slate-500">@ahmedmutti</p>
          </div>
        </button>
        <Button className="inline-flex! items-center! gap-1! rounded-full! border-0! bg-[#e7f3ff]! px-3! py-1! text-xs! font-bold! text-[#1877f2]! transition! hover:bg-[#d8ebff]! disabled:opacity-50! cursor-pointer!">
          <i className="fa-solid fa-user-plus"></i>
          Follow
        </Button>
      </div>
      <div class="mt-2 flex items-center gap-2 text-[11px] font-normal">
        <span class="rounded-full text-gray-500 bg-gray-200 px-2 py-0.5">
          582 followers
        </span>
        <span class="rounded-full bg-[#edf4ff] px-2 py-0.5 text-[#1877f2] hidden">
          0 mutuals
        </span>
      </div>
    </div>
  );
}
