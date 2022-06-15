/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from './AppHeader.module.css'

import Socials from './Socials'

export default function AppHeader() {
  const [click, setClick] = useState(false)

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <h1 className='abril-fatface'>Iris Makes Food</h1>
        </a>
      </Link>
      <ul>
        <li>
          <Image src='/icons/search.svg' width='20' height='20' />
        </li>
        <button onClick={() => setClick(true)}>
          <li>
            <Image src='/icons/menu.svg' width='20' height='20' />
          </li>
        </button>
        {click ? <Socials /> : null}
      </ul>
    </header>
  )
}
