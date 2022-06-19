import PostCollection from '../../components/PostCollection'

import { request } from '../../lib/datocms'

function COLLECTION_QUERY(CollectionId) {
  return `query Query {
    allPostcollections(filter: {id: {eq: "${CollectionId}" }}) {
      id
      collectiontitle
      postcollection {
        id
        mainRecipePicture {
          responsiveImage(imgixParams: {fit: crop}) {
            srcSet
          }
        }
        recipeCategory {
          tagstitle
        }
        slug
        recipeName
      }
    }
  }`
}

export async function getServerSideProps() {
  const data = await request({
    query: COLLECTION_QUERY(26973849),
  })
  return { props: { data } }
}

export default function RecipesHome({ data }) {
  return (
    <div>
      <PostCollection data={data} />
    </div>
  )
}
