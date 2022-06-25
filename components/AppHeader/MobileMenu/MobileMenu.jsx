import Link from 'next/link'

import styles from './MobileMenu.module.css'

export default function MobileMenu() {
  return (
    <ul className={styles.container}>
      <li>
        <Link href='/recipes'>
          <a>Recipes</a>
        </Link>
      </li>
      <li>
        <Link href='/categories'>
          <a>Categories</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>Search</li>
    </ul>
  )
}
