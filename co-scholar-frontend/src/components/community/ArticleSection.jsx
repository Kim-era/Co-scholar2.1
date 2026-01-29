export default function ArticleSection({ posts }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map(post => (
        <div
          key={post.id ? `db-${post.id}` : `static-${index}`}
    post={post}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="font-bold text-xl mb-3">{post.title}</h3>
          <p className="text-gray-600 line-clamp-4">{post.content}</p>

          <div className="mt-4 text-sm text-orange-500 font-medium">
            Read more →
          </div>
        </div>
      ))}
    </div>
  );
}
