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

  async function getPosts() {
    const data = await request()
  }

export default function RecipesPage() {
    return (
        <div>new recipes page</div>
    )
}