// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import Meta from "../components/meta"

// const AboutTemplate = ({ data }) => {
//   const { wp, metaSite, metaWpSite, metaWp } = data

//   return (
//     <Layout>
//       <Meta metaSite={metaSite} metaWpSite={metaWpSite} metaWpPage={metaWp} />

//       <p>Hello from {wp.title}</p>
//     </Layout>
//   )
// }

// AboutTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default AboutTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     ...MetaSiteFragment
//     ...MetaWpSiteFragment
//     ...MetaWpPageFragment

//     wp: wordpressPage(id: { eq: $id }) {
//       title
//     }
//   }
// `
