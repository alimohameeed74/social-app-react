import { Button, Textarea } from "flowbite-react";
import ReplyCard from "../Reply-Card/ReplyCard";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../../shared/contexts/AuthContext/AuthContext";
import axios from "axios";
import { API_URL } from "../../../../../shared/consts/Constants";
import ReplyCardLoader from "../../../../../shared/skeletons/reply/Reply-Card-Loader/ReplyCardLoader";

export default function CommentReplies({
  postId,
  commentId,
  commentCreator: { name, _id },
}) {
  const [replies, setReplies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    loggedUser: { username, photo, _id: userId },
  } = useContext(authContext);

  async function getReplies() {
    setIsLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/posts/${postId}/comments/${commentId}/replies?page=1&limit=10`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setReplies(result.data.data.replies);
    } catch (error) {
      setReplies([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    function callApi() {
      getReplies();
    }

    callApi();
  }, []);
  return (
    <>
      <div className="relative bg-[#f7f8fa]  p-4 ml-5 rounded-b-xl">
        <div className="absolute bottom-10 left-0 top-1 w-px rounded-full bg-slate-300"></div>
        {isLoading ? (
          <ReplyCardLoader />
        ) : (
          <>
            <div className="space-y-2">
              {replies.length === 0 ? (
                <p class="text-xs text-slate-500">No replies yet.</p>
              ) : (
                replies.map((reply) => (
                  <ReplyCard key={reply._id} reply={reply} />
                ))
              )}
            </div>
            <p class="mb-1 text-[11px] font-semibold text-slate-500">
              Reply to {_id === userId ? `${name} (You).` : `${name}.`}
            </p>
          </>
        )}

        {/* Create Reply Form */}
        <form className="my-3">
          <div className="flex items-start gap-2">
            <img
              className="h-9 w-9 rounded-full object-cover"
              alt="Profile"
              src={photo}
            />

            <Textarea
              id="body"
              name="body"
              rows={2}
              autoComplete="off"
              className="resize-none bg-white! text-sm shadow-xs border border-gray-300! placeholder:text-gray-400! placeholder:font-normal! text-black!"
              placeholder={`Reply as ${username}`}
            />
          </div>

          <div className="">
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="replyPhoto"
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600"
                >
                  <i className="fa-regular fa-image text-green-500"></i>
                  <span>Photo/video</span>
                </label>
                <input type="file" className="hidden" id="replyPhoto" />
              </div>

              <Button
                type="submit"
                className="text-white  box-border disabled:cursor-not-allowed! disabled:bg-gray-600! border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
              >
                <i class="fa-solid fa-paper-plane"></i>
              </Button>
            </div>
          </div>
        </form>

        {/* Show Uploaded Img */}
        <div className="relative  hidden">
          <button className="bg-white absolute top-2 inset-e-2 p-0.5 text-xs rounded-md hover:bg-red-500 hover:text-white text-black disabled:opacity-50">
            <i className="fa-solid fa-x cursor-pointer"></i>
          </button>
          <img
            alt="Uploaded Image"
            className="max-h-60 w-full object-cover rounded-xl"
            src="blob:https://social-app-zeta-ashy.vercel.app/9cb84c76-d0a8-49e1-bead-440855f52f1a"
          />
        </div>
      </div>
    </>
  );
}
