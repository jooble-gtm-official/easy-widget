import React from 'react'

import PropTypes from 'prop-types'

import './bomond-company-banner.css'

const BomondCompanyBanner = (props) => {
  return (
    <div className="bomond-company-banner-container">
      <div className="bomond-company-banner-colorframe">
        <div className="bomond-company-banner-frame206888">
          <div className="bomond-company-banner-frame206887">
            <span className="bomond-company-banner-text">
              <span>
                <span>
                  Коли в душі ти
                </span>
                <br></br>
                <span>💄бьюті блогер...</span>
              </span>
            </span>
            <span className="bomond-company-banner-text5">
              <span>Бомонд шукає продавця-консультанта</span>
            </span>
          </div>
          <div className="bomond-company-banner-frame206889">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="bomond-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="bomond-company-banner-buttons"
        >
          <span className="bomond-company-banner-text7">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

BomondCompanyBanner.defaultProps = {
  button_link: 'https://ua.jooble.org/desc/733487354291761093?eStat=true',
  image_src: '/bomond_logo.png',
  image_alt: 'image',
  button_click: () => {},
}

BomondCompanyBanner.propTypes = {
  button_link: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button_click: PropTypes.func,
}

export default BomondCompanyBanner
