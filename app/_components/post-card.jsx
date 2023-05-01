/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ data }) {
  return (
    <ul className="grid grid-cols-2 items-start">
      {data.map((item) => {
        return (
          <li key={item.recipeName} className="flex flex-col items-center p-2 my-1">
            <Link href={`/recipes/${item.slug}`}>
              <Image
                src={item.mainRecipePicture.responsiveImage.srcSet}
                width='250'
                height='250'
              />
              <h2 className='uppercase text-sm text-zinc-500 py-2 text-center'>{Object.values(item.recipeCategory)}</h2>
              <h3 className='uppercase text-lg text-zinc-800 pb-4 text-center'>{item.recipeName}</h3>
            </Link>
          </li>
        )
      })}
    </ul>
  );
}
