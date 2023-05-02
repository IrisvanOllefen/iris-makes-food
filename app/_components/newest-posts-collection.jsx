import PostCard from './post-card'

export default function NewestPostsCollection({ data }) {
  return (
    <div className="mt-5 mb-8">
        <h1 className="text-3xl uppercase text-center p-4">Newest recipes on the blog</h1>
        <PostCard data={data.props.data.allPosts} />
    </div>
  )
}
