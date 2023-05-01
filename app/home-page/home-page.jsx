'use client'


// import NewestPostsCollection from '../components/NewestPostsCollection'
// import TopCategories from '../components/TopCategories'
// import ButtonComponent from '../components/ButtonComponent'
// import AboutComponent from '../components/AboutComponent'




export default function HomePage({ recentPosts }) {
  const data = recentPosts.props.data.allPosts
  data.map((item) => {
  })
  return (
    <>
    <h1>hi</h1>
    {/* <div>{recentPosts}</div> */}
      {/* <NewestPostsCollection data={data.allPosts} /> */}
      {/* <TopCategories data={data.allTagscollections} /> */}
      {/* weekend baking top 3 */}
      {/* weeknight dinners top 3 */}
      {/* all out dinners top 3*/}
      {/* <AboutComponent data={data.about} /> */}
    </>
  )
}
