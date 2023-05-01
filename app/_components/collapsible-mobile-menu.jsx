'use client'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function CollapsibleMobileMenu() {
  const [active, setActive] = useState(false)

  return (
    <Menu as='div' className='flex'>
      <div>
        <Menu.Button>
          {active ? (
            <li className='bg-white border-none'>
              <button onClick={() => setActive(false)}>
                <XMarkIcon className='h-6 w-6 text-black' />
              </button>
            </li>
          ) : (
            <li className='bg-white border-none'>
              <button onClick={() => setActive(true)}>
                <Bars3Icon className='h-6 w-6 text-black' />
              </button>
            </li>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 bg-zinc-800 w-full top-16 p-2 flex flex-col text-lg gap-2 py-6 shadow-xl z-50'>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/recipes'
                  className={`${
                    active ? 'text-zinc-300' : 'text-white'
                  } flex w-full p-2`}
                >
                  <button className='uppercase'>Recipes</button>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/categories'
                  className={`${
                    active ? 'text-zinc-300' : 'text-white'
                  } flex w-full p-2`}
                >
                  <button className='uppercase'>Categories</button>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/about'
                  className={`${
                    active ? 'text-zinc-300' : 'text-white'
                  } flex w-full p-2`}
                >
                  <button className='uppercase'>About</button>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
