import React from 'react'

import PropTypes from 'prop-types'

import './vchasno-banner.css'

const VchasnoBanner = (props) => {
  return (
    <div className="vchasno-banner-container">
      <a
        href={props.vchasno_image_link}
        target="_blank"
        rel="noreferrer noopener"
        className="vchasno-banner-link"
      >
        <img
          src={props.image_src2}
          alt={props.image_alt2}
          onClick={props.vchasno_image_click}
          className="vchasno-banner-image"
        />
      </a>
    </div>
  )
}

VchasnoBanner.defaultProps = {
  image_src2: '/vhasno_banner.jpg',
  image_alt2: 'image',
  vchasno_image_link: '',
  vchasno_img_click: () => {},
  vchasno_image_click: () => {},
}

VchasnoBanner.propTypes = {
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  vchasno_image_link: PropTypes.string,
  vchasno_img_click: PropTypes.func,
  vchasno_image_click: PropTypes.func,
}

export default VchasnoBanner
