import { Button } from "flowbite-react";
import SuggestedFriendCard from "../Suggested-Friend-Card/SuggestedFriendCard";

export default function SuggestedFriends() {
  return (
    <div className="p-2.5 rounded-xl bg-white shadow font-bold h-fit sticky! top-18 z-10">
      <h2 class="font-bold text-[16px] text-black flex justify-between items-center mb-4">
        <span>
          <i class="fa-solid fa-users text-fg-brand me-1"></i> Suggested
          Friends{" "}
        </span>
        <span class="size-5 justify-center items-center rounded-[50%] bg-gray-200 text-gray-500 text-[12px] flex">
          10
        </span>
      </h2>

      <div className="h-80 xl:h-120 scrollbar-none overflow-y-auto">
        <SuggestedFriendCard />
        <SuggestedFriendCard />
        <SuggestedFriendCard />
        <SuggestedFriendCard />
        <SuggestedFriendCard />
      </div>

      <div className="mt-4 pt-4">
        <Button className="hover:bg-slate-100! w-full! border! border-slate-200! bg-slate-50! text-slate-600! font-bold!">
          View More
        </Button>
      </div>
    </div>
  );
}
