import { useContext, useEffect, useState } from "react";
import CommentCard from "../Comment-Card/CommentCard";
import axios from "axios";
import CommentCardLoader from "../../../../../shared/skeletons/comment/Comment-Card-Loader/CommentCardLoader";
import { API_URL } from "../../../../../shared/consts/Constants";
import { authContext } from "../../../../../shared/contexts/AuthContext/AuthContext";
import { Button, Textarea } from "flowbite-react";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    loggedUser: { username, photo },
  } = useContext(authContext);

  async function getComments() {
    setIsLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/posts/${postId}/comments?page=1&limit=10`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setComments(result.data.data.comments);
    } catch (error) {
      setComments([]);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    function callApi() {
      getComments();
    }

    callApi();
  }, []);
  return (
    <div className="border-t border-slate-200 bg-[#f7f8fa] p-4 rounded-b-xl">
      {isLoading ? (
        <CommentCardLoader />
      ) : (
        <>
          {comments.length === 0 ? (
            <div className="rounded-2xl bg-white px-4 py-8 text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef3ff] text-[#1877f2]">
                <i className="fa-regular fa-comment"></i>
              </div>
              <p className="text-lg font-extrabold text-slate-800">
                No Comments yet
              </p>
            </div>
          ) : (
            comments.map((comment) => (
              <CommentCard comment={comment} key={comment._id} />
            ))
          )}

          {/* Create Comment Form */}
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
                placeholder={`Comment as ${username}`}
              />
            </div>

            <div className="">
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="commentPhoto"
                    className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600"
                  >
                    <i className="fa-regular fa-image text-green-500"></i>
                    <span>Photo/video</span>
                  </label>
                  <input type="file" className="hidden" id="commentPhoto" />
                </div>

                <Button
                  type="submit"
                  className="text-white  box-border disabled:cursor-not-allowed! disabled:bg-gray-600! border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
                >
                  Comment
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
        </>
      )}
    </div>
  );
}
