import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Masonry from 'react-masonry-component'
import {
  bpMaxSM,
  bpMinSM,
  bpMaxMD,
  bpMinMD,
  bpMaxLG,
  bpMinLG,
} from '../utils/breakpoints'

import gif6d from '../../content/drawer/gifs/6DIntro.gif'

export default function Index({ data: { images, gifs, text } }) {
  function isURL() {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
  }
  return (
    <Main>
      <div
        css={css`
          align-items: center;
          justify-content: space-between;

          ${bpMinMD} {
            padding: 0 20px;
            display: flex;
            flex-direction: row;
          }
          padding: 20px 10px 0 10px;
        `}>
        <h1
          css={{
            marginBottom: '15px',
          }}>
          Vojta's Drawer
        </h1>
        <p
          css={{
            [bpMinMD]: {
              maxWidth: '50%',
            },
            [bpMinLG]: {
              maxWidth: '30%',
            },
            fontSize: '17px',
            marginTop: '15px',
            color: 'hsla(0, 0%, 0%, 0.7)',
          }}>
          Sometimes I put images of stuff I've worked on inside a special folder
          and they magically appear here. I call it a Drawer.
        </p>
      </div>
      <div
        css={css`
          .image-name {
            position: absolute;
            color: white;
            margin-left: 0px;
            ${bpMinMD} {
            margin-top: 8px;
            font-size: 13px;
          }
          margin-top: 5px;
          font-size: 12px;
            line-height: 1.2;
            opacity: 0.2;
            //padding: 4px 6px 3px 6px;
            color: black;
          }
          /* funk is turned off
           .grid-item:nth-of-type(2n) {
            ${bpMinMD} {
              max-width: 66%;
              width: 100%;
              padding: 10px;
            }
            width: 50%;
          } */
             .gatsby-image-wrapper {box-shadow: 0 30px 80px -20px hsla(0,0%,0%,0.2); cursor: zoom-in;} 
          .grid-item {
            width: 100%;
            
            ${bpMinMD} {
              max-width: 33.33333%;
              padding: 25px;
              
            }
            max-width: 50%;
            padding: 20px 8px;
            
          }
          .grid-item-inner {
            
            :hover {
              .image-name {
                opacity: 0.8;
                //background: rgba(0, 0, 0, 0.8);
                color: hsla(0, 0%, 0%, 0.5);
              }
            }
          }
          /* .masonry-item {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
          } */
        `}>
        <Masonry className={'masonry-item'}>
          {images.edges.map(({ node: data }) => (
            <div className='grid-item' key={data.id}>
              <div className='grid-item-inner'>
                <a
                  href={data.childImageSharp.fluid.originalImg}
                  target='_blank'>
                  <Img alt={data.name} sizes={data.childImageSharp.fluid} />
                </a>
                {data.name.match('-') ? (
                  <span className='image-name'>
                    {data.name
                      .substring(4)
                      .split('-')
                      .map((name, dash) => (
                        <span key={data.index}>
                          {name}
                          {dash >= 0 && ' '}
                          {/* Curation is key */}
                          {name === 'howtoegghead.com' && (
                            <a href='https://howtoegghead.com'>visit</a>
                          )}
                          {name === 'kentcdodds.com' && (
                            <a href='https://kentcdodds.com'>visit</a>
                          )}
                          {name === 'moonhighway.com' && (
                            <a href='https://moonhighway.com'>visit</a>
                          )}
                          {name === 'moonhighway.com:articles' && (
                            <a href='https://moonhighway.com/articles'>visit</a>
                          )}
                          {name === 'gatsby starter egghead blog' && (
                            <a href='https://github.com/eggheadio/gatsby-starter-egghead-blog'>
                              visit
                            </a>
                          )}
                        </span>
                      ))}
                  </span>
                ) : (
                  <span className='image-name'>{data.name}</span>
                )}
              </div>
            </div>
          ))}
          <div className='grid-item'>
            <img src={gif6d} />
          </div>
        </Masonry>
        {/* <div>
          {text.edges.map(({ node: data }) => (
            <div
              key={data.id}
              className='grid-item'
              css={css`
                width: 100%;

                background: yellow;
                padding: 40px;
                background: #fafafa;
              `}>
              <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
            </div>
          ))}
        </div> */}
      </div>
      <h2
        css={css`
          font-size: 15px;

          ${bpMinLG} {
            padding-top: 50px;
          }
          padding-top: 20px;
          text-align: center;
          a {
            color: hsla(0, 0%, 0%, 0.8);
            text-decoration: none;
          }
        `}>
        👋 <a href='mailto:vojta@egghead.io'>vojta@egghead.io</a>
      </h2>
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  //max-width: 1440px;
  background: #fafafa;
  ${bpMinLG} {
    padding: 20px;
  }
  padding: 5px;
  h2 {
    margin-top: 2em;
  }
  h3 {
    font-size: 24px;
    line-height: 1;
  }
`

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    text: allMdx(filter: { fields: { collection: { eq: "drawer" } } }) {
      edges {
        node {
          id
          fields {
            slug
            collection
          }
          frontmatter {
            title
          }
        }
      }
    }
    gifs: allFile(
      filter: {
        extension: { regex: "/gif/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          name
          absolutePath
          relativePath
          relativeDirectory
          sourceInstanceName
        }
      }
    }
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|png)/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          name
          relativePath
          relativeDirectory
          sourceInstanceName
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
              src
              originalImg
            }
            fixed(width: 800, height: 800) {
              ...GatsbyImageSharpFixed
              src
            }
          }
        }
      }
    }
  }
`
