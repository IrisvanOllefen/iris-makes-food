import { request } from '../../lib/datocms'
import HomePageComponent from './HomePage'

const HOMEPAGE_QUERY = ` query Query {
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
    allTagscollections(first: "4") {
      id
      slug
      tagstitle
    }
  }`
  

async function getPosts() {
    const data = await request({
        query: HOMEPAGE_QUERY,
      })
      return {
        props: { data },
      }
}

export default async function HomePage() {
    const recentPosts = await getPosts()
    return (
        <>
            <HomePageComponent recentPosts={recentPosts} />
        </>
    )
}