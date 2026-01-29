export default function FeedSection({ posts }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div
          key={post.id ? `db-${post.id}` : `static-${index}`}
    post={post}
          className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p className="text-gray-600 mt-2">{post.content}</p>

          <div className="text-sm text-gray-400 mt-3">
            Posted by {post.author_name || "Anonymous"}
          </div>
        </div>
      ))}
    </div>
  );
}
