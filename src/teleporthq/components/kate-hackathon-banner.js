import React from 'react'

import PropTypes from 'prop-types'

import './kate-hackathon-banner.css'

const KateHackathonBanner = (props) => {
  return (
    <div className="kate-hackathon-banner-container">
      <a
        href={props.Frame_Link}
        target="_blank"
        rel="noreferrer noopener"
        className="kate-hackathon-banner-link"
      >
        <div
          onClick={props.Frame_LinkClick}
          className="kate-hackathon-banner-frame206871"
        >
          <div className="kate-hackathon-banner-container1">
            <div className="kate-hackathon-banner-info-wrapper">
              <p className="kate-hackathon-banner-title DesktopH3">
                {props.Title}
              </p>
              <p className="kate-hackathon-banner-subtitle">
                {props.Description}
              </p>
            </div>
            <button className="kate-hackathon-banner-buttons">
              <span className="kate-hackathon-banner-text">{props.Button}</span>
            </button>
          </div>
          <img
            alt={props.pastedImage_alt1}
            src={props.pastedImage_src1}
            className="kate-hackathon-banner-img"
          />
        </div>
      </a>
    </div>
  )
}

KateHackathonBanner.defaultProps = {
  image_prop:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/726baac5-638e-4c00-a100-27802b868207/714ddfe2-e846-4b8d-8878-604134eab518?org_if_sml=185471',
  pastedImage_alt: 'pastedImage',
  Frame_LinkClick: () => {},
  Button: 'Доєднатись',
  Description:
    'Долучайтесь до нашої спільноти матусь для підтримки і консультацій 24/7!',
  Title: 'Секс та вагітність. Безкоштовні консультації!',
  pastedImage_src1: '/pastedImage-6ans.png',
  pastedImage_alt1: 'pastedImage',
  Frame_Link: '',
}

KateHackathonBanner.propTypes = {
  image_prop: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Frame_LinkClick: PropTypes.func,
  Button: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  Frame_Link: PropTypes.string,
}

export default KateHackathonBanner
