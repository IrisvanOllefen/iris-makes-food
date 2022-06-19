import { request } from '../../lib/datocms'

import RecipeComponent from '../../components/RecipeComponent'

const ALL_POSTS_QUERY = `query Query {
  allPosts {
    slug
  }
}`

function POST_QUERY(slug) {
  return `query MyQuery {
    post(filter: {slug: {eq: "${slug}"}}) {
      recipeName
      slug
      datePublished
      recipeCategory {
        tagstitle
      }
      mainRecipePicture {
        responsiveImage(imgixParams: {fit: crop}) {
          srcSet
          alt
          width
          height
        }
      }
      content {
        __typename
        ... on IngredientslistRecord {
          id
          ingredientsitem {
            ingredientsitem
          }
        }
        __typename
        ... on InstructionslistRecord {
          id
          instructionsitem {
            instructionsitem
          }
        }
        __typename
        ... on ParagraphRecord {
          id
          paragraph {
            value
        }
      }
      }
    } 
  }`
}

export async function getStaticPaths() {
  const data = await request({
    query: ALL_POSTS_QUERY,
  })

  const paths = data.allPosts.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await request({
    query: POST_QUERY(params.slug),
  })
  return {
    props: { data },
  }
}

export default function SingleRecipe({ data }) {
  return (
    <div>
      <RecipeComponent data={data.post} />
    </div>
  )
}
