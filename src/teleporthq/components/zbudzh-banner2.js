import React from 'react'

import PropTypes from 'prop-types'

import './zbudzh-banner2.css'

const ZbudzhBanner2 = (props) => {
  return (
    <div className="zbudzh-banner2-container">
      <a
        href={props.Frame_Link}
        target="_blank"
        rel="noreferrer noopener"
        className="zbudzh-banner2-link"
      >
        <div className="zbudzh-banner2-frame206871">
          <div className="zbudzh-banner2-container1">
            <div className="zbudzh-banner2-info-wrapper">
              <p className="zbudzh-banner2-title DesktopH3">{props.Title}</p>
              <p className="zbudzh-banner2-subtitle">{props.Description}</p>
            </div>
            <button className="zbudzh-banner2-buttons">
              <span className="zbudzh-banner2-text">{props.Button}</span>
            </button>
          </div>
          <img src="/zbudzhimg.png" className="zbudzh-banner2-zbudzhicon" />
        </div>
      </a>
    </div>
  )
}

ZbudzhBanner2.defaultProps = {
  Frame_LinkClick: () => {},
  Frame_Link: '',
  img_src: 'b5e9c657-afff-4223-ab2d-d6ff623a608b',
  pastedImage_alt1: 'pastedImage',
  Title: 'Boost your career now!',
  Description:
    'Your personal 10-minute daily skill simulator. Take the first step to career growth and success today!',
  Button: 'Try it for free',
}

ZbudzhBanner2.propTypes = {
  Frame_LinkClick: PropTypes.func,
  Frame_Link: PropTypes.string,
  img_src: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Button: PropTypes.string,
}

export default ZbudzhBanner2
