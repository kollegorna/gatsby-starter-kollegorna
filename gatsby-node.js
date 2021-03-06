/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require(`path`)
// const slash = require(`slash`)

// -----------------------------------------------------------------------------
// onCreateWebpackConfig

exports.onCreateWebpackConfig = ({ getConfig, actions, stage, loaders }) => {
  const config = getConfig()

  // nullify loaders for some packages
  // if (stage === `build-html`) {
  //   config.module.rules.push({
  //     test: /mapbox-gl|react-mapbox-gl/,
  //     use: loaders.null(),
  //   })
  // }

  actions.replaceWebpackConfig(config)
}

// -----------------------------------------------------------------------------
// createPages example for Wordpress

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//
//   const { data } = await graphql(`
//     query {
//       wpPages: allWordpressPage(
//         filter: { slug: { regex: "/^((?!(^_gatsbydummy)).)*$/i" } }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//
//       wpPosts: allWordpressPost(
//         filter: { slug: { regex: "/^((?!(^_gatsbydummy)).)*$/i" } }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)
//
//   const templates = {
//     default: `./src/templates/default.js`,
//     index: `./src/templates/index.js`,
//     about: `./src/templates/about.js`,
//     post: `./src/templates/post.js`,
//   }
//
//   // pages
//
//   const pageSlugsToTemplates = {
//     index: `index`,
//     about: `about`,
//   }
//
//   data.wpPages.edges.forEach(edge => {
//     const template =
//       templates[pageSlugsToTemplates[edge.node.slug] || `default`]
//
//     createPage({
//       path: edge.node.slug === `index` ? `/` : edge.node.slug,
//       component: slash(path.resolve(template)),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
//
//   // posts
//
//   data.wpPosts.edges.forEach(edge => {
//     createPage({
//       path: `/posts/${edge.node.slug}`,
//       component: slash(path.resolve(templates.post)),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }
