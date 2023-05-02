import Link from 'next/link'

export default function TopCategories({ data }) {
  const usableData = data.props.data.allTagscollections
  return (
    <div className="mb-24">
      <h2 className="text-2xl uppercase text-center p-4 mb-4">Check out the top categories</h2>
      <ul className="flex flex-col gap-6 items-center mx-16">
        {usableData.map((item) => {
          return (
            <li key={item.tagstitle} className="bg-zinc-800 w-full px-3 py-3 rounded-md text-center">
              <Link href={`/categories/${item.slug}`} className="text-zinc-100 uppercase text-sm">{item.tagstitle}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
