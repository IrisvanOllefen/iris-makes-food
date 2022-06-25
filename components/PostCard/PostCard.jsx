/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

import styles from './PostCard.module.css'

export default function PostCard({ data }) {
  return (
    <ul className={styles.container}>
      {data.map((item) => {
        return (
          <li key={item.recipeName}>
            <Link href={`/recipes/${item.slug}`}>
              <a className={styles.article}>
                <Image
                  src={item.mainRecipePicture.responsiveImage.srcSet}
                  width='250'
                  height='250'
                />
                <h2>{Object.values(item.recipeCategory)}</h2>
                <h3 className={'abril-fatface'}>{item.recipeName}</h3>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
