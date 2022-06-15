import PostComponent from './PostComponent'

import styles from './NewestPostsBlock.module.css'

export default function NewestPostsBlock({ data }) {
  return (
    <div className={styles.container}>
      <h1>Check out the newest recipes on the blog!</h1>
      <div className={styles['post-box']}>
        {data.map((post) => {
          return <PostComponent data={post} key={post} />
        })}
      </div>
    </div>
  )
}
