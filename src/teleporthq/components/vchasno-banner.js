import React from 'react'

import PropTypes from 'prop-types'

import './vchasno-banner.css'

const VchasnoBanner = (props) => {
  return (
    <div className="vchasno-banner-container">
      <a
        href="https://biznes-bez-paperu.com.ua/?utm_source=Jooble-search&amp;utm_medium=forumBBP#kvutku"
        target="_blank"
        rel="noreferrer noopener"
        className="vchasno-banner-link"
      >
        <img
          src={props.image_src1}
          alt={props.image_alt1}
          className="vchasno-banner-image"
        />
      </a>
    </div>
  )
}

VchasnoBanner.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  image_src1: '/vhasno_banner.png.jpg',
  image_alt1: 'image',
  button: 'Button',
}

VchasnoBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
}

export default VchasnoBanner
