/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

import styles from './PostComponent.module.css'

export default function PostComponent() {
  return (
    <div>
      <Link href='/'>
        <a className={styles.container}>
          <h2>Bakery Goods</h2>
          <Image
            src='/images/chocolate-chip-cookie.jpg'
            width='200'
            height='300'
          />
          <h3>My Chocolate Chip Cookies</h3>
        </a>
      </Link>
    </div>
  )
}
