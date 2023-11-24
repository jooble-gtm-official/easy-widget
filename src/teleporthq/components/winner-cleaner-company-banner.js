import React from 'react'

import PropTypes from 'prop-types'

import './winner-cleaner-company-banner.css'

const WinnerCleanerCompanyBanner = (props) => {
  return (
    <div className="winner-cleaner-company-banner-container">
      <div className="winner-cleaner-company-banner-colorframe">
        <div className="winner-cleaner-company-banner-frame206888">
          <div className="winner-cleaner-company-banner-frame206887">
            <span className="winner-cleaner-company-banner-text">
              <span>Клінер на Porsche</span>
            </span>
            <span className="winner-cleaner-company-banner-text2">
              <span>Офіційна робота з хорошим соціальним пакетом</span>
            </span>
          </div>
          <div className="winner-cleaner-company-banner-frame206889">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="winner-cleaner-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="winner-cleaner-company-banner-buttons"
        >
          <span className="winner-cleaner-company-banner-text4">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

WinnerCleanerCompanyBanner.defaultProps = {
  button_link: 'https://ua.jooble.org/desc/-3039918232693210870?eStat=true',
  button_click: () => {},
  image_src: '/sparkle_car.png',
  image_alt: 'image',
}

WinnerCleanerCompanyBanner.propTypes = {
  button_link: PropTypes.string,
  button_click: PropTypes.func,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default WinnerCleanerCompanyBanner
