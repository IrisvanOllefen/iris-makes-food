/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

import styles from './PostComponent.module.css'

export default function PostComponent({ data }) {
  return (
    <div>
      <Link href='/'>
        <a className={styles.container}>
          <Image
            src={data.mainRecipePicture.responsiveImage.srcSet}
            width='250'
            height='250'
          />
          <h2>{Object.values(data.recipeCategory)}</h2>
          <h3 className={'abril-fatface'}>{data.recipeName}</h3>
        </a>
      </Link>
    </div>
  )
}
