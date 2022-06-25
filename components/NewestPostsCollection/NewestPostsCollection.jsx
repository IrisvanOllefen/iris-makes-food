import PostCard from '../PostCard'

import styles from './NewestPostsCollection.module.css'

export default function NewestPostsCollection({ data }) {
  return (
    <div className={styles.container}>
      <h1>Newest recipes on the blog!</h1>
      <PostCard data={data} />
    </div>
  )
}
