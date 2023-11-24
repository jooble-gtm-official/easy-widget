import React from 'react'

import PropTypes from 'prop-types'

import './confiskat-company-banner.css'

const ConfiskatCompanyBanner = (props) => {
  return (
    <div className="confiskat-company-banner-container">
      <div className="confiskat-company-banner-colorframe">
        <div className="confiskat-company-banner-frame206888">
          <div className="confiskat-company-banner-frame206887">
            <span className="confiskat-company-banner-text">
              <span>Одеса!🌞</span>
            </span>
            <span className="confiskat-company-banner-text2">
              <span>Шукаємо комірника в магазин</span>
            </span>
          </div>
          <div className="confiskat-company-banner-package">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="confiskat-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="confiskat-company-banner-buttons"
        >
          <span className="confiskat-company-banner-text4">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

ConfiskatCompanyBanner.defaultProps = {
  image_src: '/package.png',
  image_alt: 'image',
  button_link: 'https://ua.jooble.org/desc/-2817362241017114546?eStat=true',
  button_click: () => {},
}

ConfiskatCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default ConfiskatCompanyBanner
