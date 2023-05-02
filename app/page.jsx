import { request } from '../lib/datocms'
import SearchComponent from './_components/search-component'
import AboutMe from './_components/about-me'
import TopCategories from './_components/top-categories'
import NewestPostsCollection from './_components/newest-posts-collection'


export const metadata = {
    title: 'Iris Makes Food',
    description: 'My culinairy place on the internet.',
  }

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


export default async function Page() {
  const data = await getPosts()
    return (
      <div>
        <SearchComponent />
        <NewestPostsCollection data={data}/>
        <TopCategories data={data} />
        <AboutMe data={data} />
      </div>
    )
}