import Link from 'next/link'

import styles from './Copyright.module.css'

export default function Copyright() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href='/'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href='/'>
            Terms of Use
          </Link>
        </li>
      </ul>
      <p>© 2022 Iris van Ollefen. All Rights Reserved. </p>
    </div>
  );
}
