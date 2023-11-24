import React from 'react'

import PropTypes from 'prop-types'

import './fozzy-company-banner.css'

const FozzyCompanyBanner = (props) => {
  return (
    <div className="fozzy-company-banner-container">
      <div className="fozzy-company-banner-colorframe">
        <div className="fozzy-company-banner-frame206888">
          <div className="fozzy-company-banner-frame206887">
            <span className="fozzy-company-banner-text">
              Львів, розшукується комплетувальник
            </span>
            <span className="fozzy-company-banner-text1">
              - робота в блекаут
              <br></br>
              - смачні обіди
              <br></br>
              - корпоративний транспорт
            </span>
          </div>
          <div className="fozzy-company-banner-container1">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="fozzy-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="fozzy-company-banner-buttons"
        >
          <span className="fozzy-company-banner-text6">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

FozzyCompanyBanner.defaultProps = {
  button_link: 'https://ua.jooble.org/desc/8225858133535485602?eStat=true',
  button_click: () => {},
  image_src: '/fozzy_logo.png',
  image_alt: 'image',
}

FozzyCompanyBanner.propTypes = {
  button_link: PropTypes.string,
  button_click: PropTypes.func,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FozzyCompanyBanner