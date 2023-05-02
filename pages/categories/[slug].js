// import PostCard from '../../components/PostCard'

import { request } from '../../lib/datocms'

const ALL_TAGS_QUERY = ` query Query {
  allTagscollections {
    slug
  }
}`

function TAG_QUERY(slug) {
  return `query MyQuery {
    tagscollection(filter: {slug: {eq: "${slug}"}}) {
      id
      tagstitle
      slug
    }
  }`
}

function POSTS_BY_CATEGORY_QUERY(categoryId) {
  return `query Query {
    allPosts(filter: {recipeCategory: {eq: "${categoryId}"}}) {
      recipeName
      slug
      mainRecipePicture {
        responsiveImage(imgixParams: {fit: crop}) {
          srcSet
        }
      }
      recipeCategory {
        tagstitle
      }
    }
  }`
}

export async function getStaticPaths() {
  const data = await request({
    query: ALL_TAGS_QUERY,
  })

  const paths = data.allTagscollections.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const tagResult = await request({
    query: TAG_QUERY(params.slug),
  })
  const tagData = tagResult.tagscollection

  const postsResult = await request({
    query: POSTS_BY_CATEGORY_QUERY(tagData.id),
  })

  const postsData = postsResult.allPosts
  return {
    props: { tagData, postsData },
  }
}

export default function SingleRecipe({ tagData, postsData }) {
  return (
    <div>
      <h1>{tagData.tagstitle}</h1>
      {/* <PostCard data={postsData} /> */}
    </div>
  )
}
