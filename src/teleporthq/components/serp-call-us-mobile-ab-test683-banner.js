import React from 'react'

import PropTypes from 'prop-types'

import './serp-call-us-mobile-ab-test683-banner.css'

const SerpCallUsMobileABTest683Banner = (props) => {
  return (
    <div className="serp-call-us-mobile-ab-test683-banner-container">
      <div className="serp-call-us-mobile-ab-test683-banner-frame206890">
        <div className="serp-call-us-mobile-ab-test683-banner-frame206826">
          <div className="serp-call-us-mobile-ab-test683-banner-frame206816">
            <span className="serp-call-us-mobile-ab-test683-banner-text MobileH3">
              {props.title_text}
            </span>
            <span className="serp-call-us-mobile-ab-test683-banner-text1">
              {props.paragraph_text}
            </span>
          </div>
          <div className="serp-call-us-mobile-ab-test683-banner-frame206881">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="serp-call-us-mobile-ab-test683-banner-image"
            />
          </div>
        </div>
        <button
          onClick={props.mobile_call_click}
          className="serp-call-us-mobile-ab-test683-banner-buttons"
        >
          <span className="serp-call-us-mobile-ab-test683-banner-text2">
            {props.button_text}
          </span>
        </button>
      </div>
    </div>
  )
}

SerpCallUsMobileABTest683Banner.defaultProps = {
  button_text: 'Call',
  image_alt1: 'image',
  mobile_call_click: () => {},
  image_src1: '/bell1.png',
  title_text: 'One call - and you are at a new job',
  paragraph_text: 'Dial if you are looking for a job - we will do the rest',
}

SerpCallUsMobileABTest683Banner.propTypes = {
  button_text: PropTypes.string,
  image_alt1: PropTypes.string,
  mobile_call_click: PropTypes.func,
  image_src1: PropTypes.string,
  title_text: PropTypes.string,
  paragraph_text: PropTypes.string,
}

export default SerpCallUsMobileABTest683Banner
