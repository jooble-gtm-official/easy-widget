import React from 'react'

import PropTypes from 'prop-types'

import './zbudzh-banner.css'

const ZbudzhBanner = (props) => {
  return (
    <div className="zbudzh-banner-container">
      <div className="zbudzh-banner-frame206885">
        <div className="zbudzh-banner-frame206817">
          <div className="zbudzh-banner-frame206816">
            <span className="zbudzh-banner-text DesktopH3">
              <span>Boost your career now!</span>
            </span>
            <span className="zbudzh-banner-text2 ParagraphP16(default)">
              <span>
                Your personal 10-minute daily skill simulator. Take the first
                step to career growth and success today!
              </span>
            </span>
          </div>
          <a
            href={props.ZbudzhLink}
            target="_blank"
            rel="noreferrer noopener"
            onClick={props.ZbudzhLinkClick}
            className="zbudzh-banner-buttons"
          >
            <span className="zbudzh-banner-text4">
              <span>Try it for free</span>
            </span>
          </a>
        </div>
        <div className="zbudzh-banner-container1">
          <img
            src={props.image_src}
            alt={props.image_alt}
            className="zbudzh-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

ZbudzhBanner.defaultProps = {
  image_src: '/zbudzhimg.png',
  image_alt: 'image',
  link_text: '',
  ZbudzhLink: '',
  ZbudzhLinkClick: () => {},
}

ZbudzhBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  link_text: PropTypes.string,
  ZbudzhLink: PropTypes.string,
  ZbudzhLinkClick: PropTypes.func,
}

export default ZbudzhBanner
