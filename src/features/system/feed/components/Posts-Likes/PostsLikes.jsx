import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../../shared/consts/Constants";
import LikeCard from "../Like-Card/LikeCard";
import LikeCardLoader from "../../../../../shared/skeletons/likes/Like-Card-Loader/LikeCardLoader";

export default function PostsLikes({ id }) {
  const [likes, setLikes] = useState([]);
  const [likesLoading, setLikesLoading] = useState([]);

  async function getPostLikes() {
    setLikesLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/posts/${id}/likes?page=1&limit=20`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setLikes(result.data.data.likes);
    } catch (error) {
      setLikes([]);
    } finally {
      setLikesLoading(false);
    }
  }

  useEffect(() => {
    function callApi() {
      getPostLikes();
    }

    callApi();
  }, []);
  return (
    <div className="mb-4 px-4">
      {likesLoading ? (
        <LikeCardLoader />
      ) : (
        <>
          {likes.length === 0 ? (
            <div class="rounded-2xl bg-white px-4 py-8 text-center">
              <div class="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef3ff] text-[#1877f2]">
                <i class="fa-regular fa-thumbs-up"></i>
              </div>
              <p class="text-lg font-extrabold text-slate-800">No Likes yet</p>
            </div>
          ) : (
            <>
              {likes.map((like) => (
                <LikeCard key={like._id} like={like} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
