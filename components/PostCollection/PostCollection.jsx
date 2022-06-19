import PostThumbnail from '../PostThumbnail'

import styles from './PostCollection.module.css'

export default function PostCollection({ data }) {
  return (
    <div className={styles.container}>
      {data.allPostcollections.map((collectionItem) => {
        return (
          <div key={collectionItem}>
            <h1>{collectionItem.collectiontitle}</h1>
            <PostThumbnail data={collectionItem.postcollection} />
          </div>
        )
      })}
    </div>
  )
}
