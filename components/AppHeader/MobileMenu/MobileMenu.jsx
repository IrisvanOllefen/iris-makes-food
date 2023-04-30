import Link from 'next/link'

import styles from './MobileMenu.module.css'

export default function MobileMenu() {
  return (
    <ul className={styles.container}>
      <li>
        <Link href='/recipes'>
          Recipes
        </Link>
      </li>
      <li>
        <Link href='/categories'>
          Categories
        </Link>
      </li>
      <li>
        <Link href='/about'>
          About
        </Link>
      </li>
    </ul>
  );
}
