/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

export default function AboutMe({ data }) {
  return (
    <div className=' bg-slate-100 p-4 text-center pb-10 flex flex-col gap-6'>
      <Image
        src={data.props.data.about.profilepicture.responsiveImage.srcSet}
        width={data.props.data.about.profilepicture.responsiveImage.width}
        height={data.props.data.about.profilepicture.responsiveImage.height}
        className='w-2/3 mx-auto rounded-full mt-8 mb-8 shadow-lg'
      />
      <div>
        <h1 className='uppercase text-2xl mb-2'>
          {data.props.data.about.name}
        </h1>
        <h2 className="uppercase">{data.props.data.about.welcome}</h2>
      </div>
      <p>{data.props.data.about.paragraph}</p>
      <section>
        <Link
          href='/about'
          className='bg-zinc-600 text-zinc-100 px-3 py-2 rounded-md uppercase text-sm'
        >
          More about me
        </Link>
      </section>
    </div>
  )
}
