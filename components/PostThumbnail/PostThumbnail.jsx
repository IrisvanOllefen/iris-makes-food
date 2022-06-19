/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

import styles from './PostThumbnail.module.css'

export default function PostThumbnail({ data }) {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        return (
          <Link key={item} href={`/recipes/${item.slug}`}>
            <a className={styles.container}>
              <Image
                src={item.mainRecipePicture.responsiveImage.srcSet}
                width='250'
                height='250'
              />
              <h2>{Object.values(item.recipeCategory)}</h2>
              <h3 className={'abril-fatface'}>{item.recipeName}</h3>
            </a>
          </Link>
        )
      })}
    </div>
  )
}
