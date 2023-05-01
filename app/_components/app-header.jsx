import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import CollapsibleMobileMenu from './collapsible-mobile-menu'

export default function AppHeader({ className }) {

  return (
    <>
    <header className={` ${className} bg-white flex flex-row items-baseline md:items-center py-2 mx-2 justify-between border-b border-b-slate-200 pr-4`}>
      <Link href='/'>
        <h1 className='uppercase text-4xl p-0.5 text-center'>Iris Makes Food</h1>
      </Link>
      <ul className="flex gap-4 md:hidden">
        <li>
        <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </li>
        <CollapsibleMobileMenu />
      </ul>
      <ul className="hidden md:flex gap-6 uppercase text-lg items-center">
        <li>
          <Link href="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link href="/categories">
            Categories
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
        <MagnifyingGlassIcon className="h-6 w-6" />
        </li>
      </ul>
    </header> 
    </>
  )
}
