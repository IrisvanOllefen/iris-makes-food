import Socials from '../Socials'

import styles from './AppFooter.module.css'

export default function AppFooter() {
  return (
    <div className={styles.container}>
      <div className={styles['list-wrapper']}>
        <div className={styles['list']}>
          <h3 className='list-title'>More from me</h3>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles['list']}>
          <h3 className='list-title'>Recipe Index</h3>
          <ul>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
      <h1 className='logo'> Iris Makes Food </h1>
      <Socials />
      <p className='small-letters'>
        © 2022 Iris van Ollefen. All Rights Reserved.{' '}
      </p>
    </div>
  )
}
