/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'

import Pinterest from '../icons/pinterest'
import Instagram from '../icons/instagram'
import Twitter from '../icons/twitter'
import YouTube from '../icons/youtube'

import styles from './Socials.module.css'

export default function Socials() {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles['logo-box']}>
          <Link href='/' className={styles.logo}>

            <Pinterest />

          </Link>
        </li>
        <li className={styles['logo-box']}>
          <Link href='/' className={styles.logo}>

            <Instagram />

          </Link>
        </li>
        <li className={styles['logo-box']}>
          <Link href='/' className={styles.logo}>

            <Twitter />

          </Link>
        </li>
        <li className={styles['logo-box']}>
          <Link href='/' className={styles.logo}>

            <YouTube />

          </Link>
        </li>
      </ul>
    </div>
  );
}
