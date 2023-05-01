// import PostCard from '../PostCard'
import PostCard from './post-card'

export default function NewestPostsCollection({ data }) {
    // console.log(data.props.data.allPosts)
  return (
    <div>
        <h1 className="text-3xl uppercase text-center p-4">Newest recipes on the blog</h1>
        <PostCard data={data.props.data.allPosts} />
    </div>
  )
}
