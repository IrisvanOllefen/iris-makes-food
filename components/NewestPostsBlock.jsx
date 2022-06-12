import PostComponent from './PostComponent'

import styles from './NewestPostsBlock.module.css'

export default function NewestPostsBlock() {
  return (
    <div className={styles.container}>
      <h1>Check out the newest recipes on the blog!</h1>
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </div>
  )
}
