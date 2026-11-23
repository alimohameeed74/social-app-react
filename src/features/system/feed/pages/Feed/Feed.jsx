import { Button, Dropdown, DropdownItem, Textarea } from "flowbite-react";
import SuggestedFriends from "../../components/Suggested-Friends/SuggestedFriends";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../../shared/consts/Constants";
import PostsList from "../../components/Posts-list/PostsList";
import PostCardLoader from "../../../../../shared/skeletons/post/Post-Card-Loader/PostCardLoader";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState([]);

  async function getAllPosts() {
    setPostsLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/posts`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setPosts(result.data.data.posts);
    } catch (error) {
      setPosts([]);
    } finally {
      setPostsLoading(false);
    }
  }

  useEffect(() => {
    function callApi() {
      getAllPosts();
    }

    callApi();
  }, []);

  return (
    <section className="grid grid-cols-1 xl:grid-cols-4 gap-4">
      <div className="xl:col-span-1">
        <SuggestedFriends />
      </div>
      <div className="h-fit xl:col-span-3">
        {/* Create Post Form */}
        <div className="p-2 rounded-xl bg-white shadow">
          <form className="flex flex-col gap-3 mb-3">
            <div className="flex justify-start items-start gap-2">
              <img
                alt="Account Logo"
                className="h-12 w-12 rounded-full"
                src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
              />

              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-[16px] text-black">fady Alla</h2>

                <Dropdown
                  className="bg-white! text-black! border border-gray-300! font-medium!"
                  name="privacy"
                  id="privacy"
                  label="Public"
                >
                  <DropdownItem className="text-black! font-medium! hover:bg-gray-500! hover:text-white!">
                    Public
                  </DropdownItem>
                  <DropdownItem className="text-black! font-medium! hover:bg-gray-500! hover:text-white!">
                    Following
                  </DropdownItem>
                  <DropdownItem className="text-black! font-medium! hover:bg-gray-500! hover:text-white!">
                    Only me
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>

            <Textarea
              id="body"
              name="body"
              rows={4}
              autoComplete="off"
              className="resize-none bg-white! text-sm shadow-xs border border-gray-300! placeholder:text-gray-400! placeholder:font-normal! text-black!"
              placeholder="What's on your mind, fady?"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-400 pt-3">
              <div className="relative flex items-center gap-2">
                <label
                  htmlFor="postImg"
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  <i className="fa-regular fa-image text-green-500"></i>
                  <span className="hidden sm:inline">Photo/video</span>
                </label>

                <input
                  id="postImg"
                  accept="image/*"
                  type="file"
                  className="hidden"
                />
              </div>

              <Button
                type="submit"
                className="text-white  box-border disabled:cursor-not-allowed! disabled:bg-gray-600! border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
              >
                Post
              </Button>
            </div>
          </form>

          {/* Show Uploaded Img */}
          <div className="relative hidden">
            <button className="bg-white absolute top-2 inset-e-2 p-0.5 text-xs rounded-md hover:bg-red-500 hover:text-white text-black disabled:opacity-50">
              <i className="fa-solid fa-trash cursor-pointer"></i>
            </button>

            <img
              alt="Uploaded Image"
              className="max-h-60 w-full object-cover rounded-xl"
              src=""
            />
          </div>
        </div>

        {/* Posts */}
        {postsLoading ? <PostCardLoader /> : <PostsList posts={posts} />}
      </div>
    </section>
  );
}
