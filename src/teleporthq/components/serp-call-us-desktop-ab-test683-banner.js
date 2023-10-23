import React from 'react'

import PropTypes from 'prop-types'

import './serp-call-us-desktop-ab-test683-banner.css'

const SerpCallUsDesktopABTest683Banner = (props) => {
  return (
    <div className="serp-call-us-desktop-ab-test683-banner-container">
      <div className="serp-call-us-desktop-ab-test683-banner-frame206889">
        <div className="serp-call-us-desktop-ab-test683-banner-frame206817">
          <div className="serp-call-us-desktop-ab-test683-banner-frame206816">
            <span className="serp-call-us-desktop-ab-test683-banner-text DesktopH3">
              {props.title_text}
            </span>
            <span className="serp-call-us-desktop-ab-test683-banner-text1 ParagraphP16(default)">
              {props.paragraph_text}
            </span>
          </div>
          <button className="serp-call-us-desktop-ab-test683-banner-buttons">
            <span
              onClick={props.desktop_call_click}
              className="serp-call-us-desktop-ab-test683-banner-text2"
            >
              {props.button_text}
            </span>
          </button>
        </div>
        <div className="serp-call-us-desktop-ab-test683-banner-frame206880">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="serp-call-us-desktop-ab-test683-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

SerpCallUsDesktopABTest683Banner.defaultProps = {
  image_src1: '/bell1.png',
  button_text: 'Call',
  paragraph_text: 'Dial if you are looking for a job - we will do the rest',
  title_text: 'One call - and you are at a new job',
  image_alt1: 'image',
  desktop_call_click: () => {},
}

SerpCallUsDesktopABTest683Banner.propTypes = {
  image_src1: PropTypes.string,
  button_text: PropTypes.string,
  paragraph_text: PropTypes.string,
  title_text: PropTypes.string,
  image_alt1: PropTypes.string,
  desktop_call_click: PropTypes.func,
}

export default SerpCallUsDesktopABTest683Banner
