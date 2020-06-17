/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            zhihu
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>{author.summary}. You can follow him on 
        {` `}
        <a target='_blank' rel='noopener noreferrer'
         href={`https://twitter.com/${social.twitter}`}>
         Twitter
        </a>
        ,
        {` `}
        <a target='_blank' rel='noopener noreferrer'
         href={`https://github.com/${social.github}`}>
         Github
        </a>
        {` `}
        or
        {` `}
        <a target='_blank' rel='noopener noreferrer'
         href={`https://www.zhihu.com/people/${social.zhihu}`}>
         知乎
        </a>
      </p>
    </div>
  )
}

export default Bio
