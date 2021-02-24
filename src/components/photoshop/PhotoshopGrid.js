import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const PhotoshopGrid = () => {
    const portfolioQuery = useStaticQuery(graphql`
        query {
        allFile(filter: { sourceInstanceName: {eq: "photoshop"}}) {
            edges {
              node {
                  childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                  originalName
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                  }
              }
            }
        }
        }`)

    return (
        <section className='photoshop'>
            <p style={{ paddingTop: 20 }} className='text text--display text--white grit'>
                i also love to play around in <span className='text--pink'>photoshop</span> to see what i can come up with.
                </p>
            <div className='photoshop-grid__container'>
                <div id='ig' className='photoshop-grid'>
                    {portfolioQuery.allFile.edges.map((item, i) => {
                        return <Img
                            key={i}
                            className='photoshop-grid__img'
                            alt={'photoshop portfolio item'}
                            fluid={item.node.childImageSharp.fluid} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default PhotoshopGrid