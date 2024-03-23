import React, {Fragment} from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Meta = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogType
          siteDescription
          siteTitle
          siteUrl
          twitterCard
        }
      }
    }
  `)

  const {
    ogDescription,
    ogImageUrl,
    ogType,
    siteDescription,
    siteTitle,
    siteUrl,
    twitterCard,
  } = data.site.siteMetadata

  return (
    <Fragment>
      <html lang='sv-SE' />
      <meta content={siteDescription} name='description' />
      <meta content={siteUrl} property='og:url' />
      <meta content={ogType} property='og:type' />
      <meta content={siteTitle} property='og:title' />
      <meta content={ogDescription} property='og:description' />
      <meta content={ogImageUrl} property='og:image' />
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:description' content={ogDescription} />
      <meta name='twitter:url' content={siteUrl} />
      <meta property='twitter:image' content={ogImageUrl} />
      <title>{siteTitle}</title>
    </Fragment>
  )
}
