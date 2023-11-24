import React from 'react'

import PropTypes from 'prop-types'

import './goldenage-company-banner.css'

const GoldenageCompanyBanner = (props) => {
  return (
    <div className="goldenage-company-banner-container">
      <div className="goldenage-company-banner-colorframe">
        <div className="goldenage-company-banner-container1">
          <div className="goldenage-company-banner-frame206888">
            <div className="goldenage-company-banner-frame206887">
              <span className="goldenage-company-banner-text">
                <span>Робота, яка прикрашає!</span>
              </span>
              <span className="goldenage-company-banner-text2">
                <span>Продавець-консультант ювелірних виробів</span>
              </span>
            </div>
            <div className="goldenage-company-banner-frame206889">
              <img
                src={props.image_src}
                alt={props.image_alt}
                className="goldenage-company-banner-image"
              />
            </div>
          </div>
        </div>
        <button
          onClick={props.button_click}
          className="goldenage-company-banner-buttons"
        >
          <a
            href={props.button_link}
            target="_blank"
            rel="noreferrer noopener"
            className="goldenage-company-banner-text4"
          >
            <span>Переглянути вакансію</span>
          </a>
        </button>
      </div>
    </div>
  )
}

GoldenageCompanyBanner.defaultProps = {
  image_src: '/golden_age_logo.png',
  image_alt: 'image',
  button_link: 'https://ua.jooble.org/desc/-5417723163614640278?eStat=true',
  button_click: () => {},
}

GoldenageCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default GoldenageCompanyBanner
