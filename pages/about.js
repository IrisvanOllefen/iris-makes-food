import { request } from '../lib/datocms'

const ABOUT_QUERY = `query Query {
    about {
        name
        welcome
        paragraph
        profilepicture {
            responsiveImage(imgixParams: {borderRadius: "100"}) {
            srcSet
            width
            height
            }
        }
        }
}`

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
  })
  return {
    props: { data },
  }
}

export default function AboutMe({ data }) {
  console.log(data.about.name)
  return (
    <div>
      <h1>{data.about.name}</h1>
    </div>
  )
}
