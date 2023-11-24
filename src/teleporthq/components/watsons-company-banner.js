import React from 'react'

import PropTypes from 'prop-types'

import './watsons-company-banner.css'

const WatsonsCompanyBanner = (props) => {
  return (
    <div className="watsons-company-banner-container">
      <div className="watsons-company-banner-colorframe">
        <div className="watsons-company-banner-frame206888">
          <div className="watsons-company-banner-frame206887">
            <span className="watsons-company-banner-text">
              <span>Васильків!</span>
            </span>
            <span className="watsons-company-banner-text2">
              <span>Watsons шукає адміністратора</span>
            </span>
          </div>
          <div className="watsons-company-banner-img">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="watsons-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="watsons-company-banner-buttons"
        >
          <span className="watsons-company-banner-text4">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

WatsonsCompanyBanner.defaultProps = {
  image_src: '/watsons_logo.png',
  image_alt: 'image',
  button_link: 'https://ua.jooble.org/desc/6592170663273205786?eStat=true',
  button_click: () => {},
}

WatsonsCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default WatsonsCompanyBanner
