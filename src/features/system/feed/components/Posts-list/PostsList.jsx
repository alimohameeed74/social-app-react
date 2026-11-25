import PostCard from "../Post-Card/PostCard";

export default function PostsList({ posts }) {
  if (posts.length === 0)
    return (
      <div class="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500 shadow-sm">
        No posts yet.
      </div>
    );
  else
    return (
      <div className="mt-3 flex flex-col gap-y-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} details={true} />
        ))}
      </div>
    );
}
