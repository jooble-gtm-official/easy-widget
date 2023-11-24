import React from 'react'

import PropTypes from 'prop-types'

import './winner-company-banner.css'

const WinnerCompanyBanner = (props) => {
  return (
    <div className="winner-company-banner-container">
      <div className="winner-company-banner-colorframe">
        <div className="winner-company-banner-frame206888">
          <div className="winner-company-banner-frame206887">
            <span className="winner-company-banner-text">
              <span>Розшукується автомеханік на FORD</span>
            </span>
            <span className="winner-company-banner-text2">
              <span>Офіційна робота з хорошим соціальним пакетом</span>
            </span>
          </div>
          <div className="winner-company-banner-frame206889">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="winner-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="winner-company-banner-buttons"
        >
          <span className="winner-company-banner-text4">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

WinnerCompanyBanner.defaultProps = {
  button_link: 'https://ua.jooble.org/desc/6984836876719714926?eStat=true',
  button_click: () => {},
  image_src: '/ford_mechanic.png',
  image_alt: 'image',
}

WinnerCompanyBanner.propTypes = {
  button_link: PropTypes.string,
  button_click: PropTypes.func,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default WinnerCompanyBanner
