import React from 'react'

import PropTypes from 'prop-types'

import './finmap-banner.css'

const FinmapBanner = (props) => {
  return (
    <div className="finmap-banner-container">
      <a
        href={props.finmap_image_link}
        target="_blank"
        rel="noreferrer noopener"
        className="finmap-banner-link"
      >
        <img
          src={props.image_src}
          alt={props.image_alt}
          onClick={props.finmap_image_click}
          className="finmap-banner-image"
        />
      </a>
    </div>
  )
}

FinmapBanner.defaultProps = {
  image_src: '/finmap.png',
  image_alt: 'image',
  finmap_image_link:
    'https://finmap.online?utm_source=email&utm_medium=partner&utm_campaign=jooble',
  finmap_image_click: () => {},
}

FinmapBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  finmap_image_link: PropTypes.string,
  finmap_image_click: PropTypes.func,
}

export default FinmapBanner
