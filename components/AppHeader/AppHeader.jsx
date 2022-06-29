import Link from 'next/link'
import { useState } from 'react'

import styles from './AppHeader.module.css'

import Close from '../icons/close'
import Menu from '../icons/menu'
import Search from '../icons/search'

import Line from '../Line'

import MobileMenu from './MobileMenu'

export default function AppHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <h1 className='logo'>Iris Makes Food</h1>
          </a>
        </Link>
        <span></span>
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
      <Line />
      {open ? (
        <>
          <MobileMenu /> <Line />
        </>
      ) : null}
    </>
  )
}
