import Link from 'next/link'

import CategoryButton from '../../components/CategoryButton'

import { request } from '../../lib/datocms'

const CATEGORY_QUERY = `query Query {
    allTagscollections {
    slug
    tagstitle
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: CATEGORY_QUERY,
  })
  return {
    props: { data },
  }
}

export default function CategoriesHome({ data }) {
  return (
    <div>
      <CategoryButton data={data.allTagscollections} />
    </div>
  )
}
