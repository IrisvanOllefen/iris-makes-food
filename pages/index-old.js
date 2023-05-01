// import Link from 'next/link'

// import { request } from '../lib/datocms'

// import NewestPostsCollection from '../components/NewestPostsCollection'
// import TopCategories from '../components/TopCategories'
// import ButtonComponent from '../components/ButtonComponent'
// import AboutComponent from '../components/AboutComponent'

// const HOMEPAGE_QUERY = ` query Query {
//   allPosts(first: "6", orderBy: _publishedAt_ASC) {
//     id
//     recipeCategory {
//       tagstitle
//     }
//     mainRecipePicture {
//       responsiveImage(imgixParams: {fit: crop}) {
//         srcSet
//       }
//     }
//     recipeName
//     slug
//   }
//   about {
//     name
//     welcome
//     paragraph
//     profilepicture {
//       responsiveImage {
//         srcSet
//         width
//         height
//       }
//     }
//   }
//   allTagscollections(first: "4") {
//     id
//     slug
//     tagstitle
//   }
// }`

// export async function getStaticProps() {
//   const data = await request({
//     query: HOMEPAGE_QUERY,
//   })
//   return {
//     props: { data },
//   }
// }

// export default function Home({ data }) {
//   return (
//     <>
//       <NewestPostsCollection data={data.allPosts} />
//       <TopCategories data={data.allTagscollections} />
//       {/* weekend baking top 3 */}
//       {/* weeknight dinners top 3 */}
//       {/* all out dinners top 3*/}
//       <AboutComponent data={data.about} />
//     </>
//   )
// }
