import PostCard from '../PostCard'

import styles from './AllPostsCollection.module.css'

export default function AllPostsCollection({ data }) {
  return (
    <div className={styles.container}>
      {/* <h1>Newest recipes on thse blog!</h1> */}
      <PostCard data={data} />
    </div>
  )
}
