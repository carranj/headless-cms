import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ homepage }) => {
  return (
    <Layout >
      <Seo seo={homepage.attributes.seo} />
        <div className="row">  
          <div className="col-md-12 text-center">
            <h1>San Angelo's BEST Event Coordinator &amp; Wedding Decor</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h3>Special Events</h3>
          </div>
          <div className="col text-center">
            <h3>Rentals</h3>
          </div>
          <div className="col text-center">
            <h3>Coordination</h3>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ homepageRes] = await Promise.all([

    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
