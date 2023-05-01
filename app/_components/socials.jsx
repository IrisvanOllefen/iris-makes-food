import Image from 'next/image'
import Link from 'next/link'

export default function Socials() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href='/'>
          <Image
            src='/pinterest.svg'
            alt='pinterest logo'
            width='30'
            height='30'
          />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <Image
            src='/instagram.svg'
            alt='instagram logo'
            width='30'
            height='30'
          />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <Image
            src='/twitter.svg'
            alt='twitter logo'
            width='30'
            height='30'
          />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <Image
            src='/youtube.svg'
            alt='youtube logo'
            width='30'
            height='30'
          />
        </Link>
      </li>
    </ul>
  )
}
