import Link from 'next/link'
import { useState } from 'react'

import styles from './AppHeader.module.css'

import Close from '../icons/close'
import Menu from '../icons/menu'
import Search from '../icons/search'

import MobileMenu from './MobileMenu'

export default function AppHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <h1 className='abril-fatface'>Iris Makes Food</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Search />
          </li>
          {open ? (
            <li className={styles['open-menu']}>
              <button onClick={() => setOpen(false)}>
                <Close />
              </button>
            </li>
          ) : (
            <li className={styles['closed-menu']}>
              <button onClick={() => setOpen(true)}>
                <Menu />
              </button>
            </li>
          )}
        </ul>
      </header>
      {open ? <MobileMenu /> : null}
    </>
  )
}
