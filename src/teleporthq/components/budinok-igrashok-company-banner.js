import React from 'react'

import PropTypes from 'prop-types'

import './budinok-igrashok-company-banner.css'

const BudinokIgrashokCompanyBanner = (props) => {
  return (
    <div className="budinok-igrashok-company-banner-container">
      <div className="budinok-igrashok-company-banner-colorframe">
        <div className="budinok-igrashok-company-banner-container1">
          <div className="budinok-igrashok-company-banner-frame206888">
            <div className="budinok-igrashok-company-banner-frame206887">
              <span className="budinok-igrashok-company-banner-text">
                <span>Робота з дитячими посмішками🤩</span>
              </span>
              <span className="budinok-igrashok-company-banner-text2">
                <span>Шукаємо продавця в Будинок іграшок</span>
              </span>
            </div>
            <div className="budinok-igrashok-company-banner-frame206889">
              <img
                src={props.image_src}
                alt={props.image_alt}
                className="budinok-igrashok-company-banner-image"
              />
            </div>
          </div>
        </div>
        <a
          href={props.button_link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.button_click}
          className="budinok-igrashok-company-banner-buttons"
        >
          <span className="budinok-igrashok-company-banner-text4">
            <span>Переглянути вакансію</span>
          </span>
        </a>
      </div>
    </div>
  )
}

BudinokIgrashokCompanyBanner.defaultProps = {
  image_src: '/budinok_igrashok_logo.png',
  image_alt: 'image',
  button_link: 'https://ua.jooble.org/desc/-3656588247328657709?eStat=true',
  button_click: () => {},
}

BudinokIgrashokCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default BudinokIgrashokCompanyBanner
