import NewestPostsCollection from '../../components/NewestPostsCollection'

import { request } from '../../lib/datocms'

const CATEGORY_QUERY = `query Query {
  allPosts(first: "6", orderBy: _publishedAt_ASC) {
    id
    recipeCategory {
      tagstitle
    }
    mainRecipePicture {
      responsiveImage(imgixParams: {fit: crop}) {
        srcSet
      }
    }
    recipeName
    slug
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

export default function RecipesHome({ data }) {
  return (
    <div>
      <NewestPostsCollection data={data.allPosts} />
    </div>
  )
}
