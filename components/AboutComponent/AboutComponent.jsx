/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

import styles from './AboutComponent.module.css'

export default function AboutComponent({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={data.profilepicture.responsiveImage.srcSet}
            width={data.profilepicture.responsiveImage.width}
            height={data.profilepicture.responsiveImage.height}
          />
        </div>
        <div className={styles.titles}>
          <h1>{data.name}</h1>
          <h2 className='subtitle'>{data.welcome}</h2>
        </div>
      </div>
      <p>{data.paragraph}</p>
      <section className={styles.link}>
        <Link href='/about'>
          <a className='button'>More about me</a>
        </Link>
      </section>
    </div>
  )
}
