import React, {Fragment} from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const BgImage = () => {
  return (
    <Fragment>
      <StaticImage
        alt='Miniature house standing on top of blueprints with bricks in front of it.'
        className='desktop-only'
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        loading='eager'
        placeholder='none'
        src='../../../images/hero-img-portrait.jpeg'
      />
      <StaticImage
        alt='Miniature house standing on top of blueprints with bricks in front of it.'
        className='mobile-only'
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        loading='eager'
        placeholder='none'
        src='../../../images/hero-img-landscape.jpeg'
      />
    </Fragment>
  )
}
