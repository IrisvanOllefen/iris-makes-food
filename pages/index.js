import { request } from '../lib/datocms'

import NewestPostsBlock from '../components/NewestPostsBlock'

const HOMEPAGE_QUERY = `query Query {
  allPosts {
    recipeName
    slug
    recipeCategory {
      tagstitle
    }
    mainRecipePicture {
      responsiveImage(imgixParams: {fit: crop}) {
        srcSet
      }
    }
  }
}`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <>
      <NewestPostsBlock data={data.allPosts} />
    </>
  )
}
