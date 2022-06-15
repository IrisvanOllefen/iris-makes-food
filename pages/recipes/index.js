import RecipePage from '../../components/RecipePage'

import { request } from '../../lib/datocms'

const HOMEPAGE_QUERY = `query Query {
  allPosts {
    recipeName
    slug
    datePublished
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

export default function RecipesHome({ data }) {
  return (
    <div>
      {data.allPosts.map((thing) => {
        return (
          <div key={thing}>
            <h1> hi</h1>
          </div>
        )
      })}
      <RecipePage data={data} />
    </div>
  )
}
