import Socials from './socials'

export default function AppFooter({ literataFont, urbanistFont }) {
  return (
    <div className={` ${literataFont} bg-zinc-800 text-zinc-100 flex flex-col gap-6 pt-10 items-center relative w-full bottom-0 pb-2`}>
      <ul className="uppercase text-md flex gap-6">
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h1 className='uppercase text-4xl p-0.5 text-center mt-6 mb-6'>Iris Makes Food</h1>
      <Socials />
      <p className={` ${urbanistFont} text-sm`}>
        © 2022 Iris van Ollefen. All Rights Reserved.
      </p>
    </div>
  )
}
