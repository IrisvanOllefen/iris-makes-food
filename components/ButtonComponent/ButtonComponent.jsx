import Link from 'next/link'

import styles from './ButtonComponent.module.css'

export default function ButtonComponent({ title, link }) {
  return (
    <div className={styles.container}>
      <Link href={`/${link}`}>
        {title}
      </Link>
    </div>
  );
}
