import { request } from '../lib/datocms'

import PostCollection from '../components/PostCollection'
import AboutComponent from '../components/AboutComponent'

const HOMEPAGE_QUERY = `query Query {
  allPostcollections(filter: {id: {eq: 26973831}}) {
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
  about {
    name
    welcome
    paragraph
    profilepicture {
      responsiveImage {
        srcSet
        width
        height
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
      <PostCollection data={data} />
      <AboutComponent data={data.about} />
    </>
  )
}
