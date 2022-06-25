import Link from 'next/link'

import styles from './CategoryButton.module.css'

export default function CategoryButton({ data }) {
  return (
    <ul className={styles.container}>
      {data.map((item) => {
        return (
          <li key={item.tagstitle} className={styles.button}>
            <Link href={`/categories/${item.slug}`}>
              <a>{item.tagstitle}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
