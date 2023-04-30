import Link from 'next/link'

import styles from './CategoryButton.module.css'

export default function CategoryButton({ data }) {
  return (
    <ul className={styles.container}>
      {data.map((item) => {
        return (
          <li key={item.tagstitle} className='button'>
            <Link href={`/categories/${item.slug}`}>
              {item.tagstitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
