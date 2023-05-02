import AllPostsCollection from '../../components/AllPostsCollection'
import Search from '../../components/SearchComponent'

import { request } from '../../lib/datocms'

function queryForAll() {
  return `
  query SearchQuery {
    allPosts {
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
}

function queryForSearching(searchingValue) {
  return `
  query SearchQuery {
    allPosts(filter: {
      recipeName: {
        matches: {
          pattern: "${searchingValue}"
        }
      }
    }) {
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
}

export async function getServerSideProps(context) {
  const data = await request({
    query: context.query.search
      ? queryForSearching(context.query.search)
      : queryForAll(),
  })

  return {
    props: {
      data,
    },
  }
}

export default function RecipesHome({ data }) {
  return (
    <div>
      <Search />
      <AllPostsCollection data={data.allPosts} />
    </div>
  )
}
