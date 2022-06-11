/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <div className={styles.body}>
      <h1>Iris Makes Food</h1>
      <ul>
        <li>
          <Image src='/icons/search.svg' width='20' height='20' />
        </li>
        <li>
          <Image src='/icons/menu.svg' width='20' height='20' />
        </li>
      </ul>
    </div>
  )
}
