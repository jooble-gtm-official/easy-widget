import React from 'react'

import PropTypes from 'prop-types'

import './wog-company-banner.css'

const WogCompanyBanner = (props) => {
  return (
    <div className="wog-company-banner-container">
      <div className="wog-company-banner-colorframe">
        <div className="wog-company-banner-frame206888">
          <div className="wog-company-banner-frame206887">
            <span className="wog-company-banner-text">
              Долучайся до команди WOGонь🔥
            </span>
            <span className="wog-company-banner-text1">
              Шукаємо операторів, касирів та техробітників
            </span>
          </div>
          <div className="wog-company-banner-frame206889">
            <img
              src={props.image_src1}
              alt={props.image_alt1}
              className="wog-company-banner-image"
            />
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="wog-company-banner-buttons"
        >
          <span className="wog-company-banner-text2">
            <span>Переглянути вакансії</span>
          </span>
        </a>
      </div>
    </div>
  )
}

WogCompanyBanner.defaultProps = {
  image_src: '023ae9ff-2a3d-49a2-8daa-2612c4a15638',
  image_alt: 'image',
  image_src1: '/wog_logo.png',
  image_alt1: 'image',
  button_link:
    'https://ua.jooble.org/company/48697/WOG?jdpid=-1104454715201230453&p=1',
  button_click: () => {},
}

WogCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default WogCompanyBanner
