import React from 'react'

import PropTypes from 'prop-types'

import './free-cv-en.css'

const FreeCVEn = (props) => {
  return (
    <div className="free-cv-en-container">
      <div className="free-cv-en-freecv4">
        <div className="free-cv-en-frame1stimg">
          <div className="free-cv-en-group207042">
            <div className="free-cv-en-group207073">
              <img
                alt={props.IMAGE1stimg1_alt}
                src={props.IMAGE1stimg1_src}
                className="free-cv-en-image1stimg1"
              />
            </div>
          </div>
          <img
            alt="Rectangle4448199"
            src="/Rectangle4448199-udx8.svg"
            className="free-cv-en-rectangle4448"
          />
          <span className="free-cv-en-text">
            <span>with free AI tools</span>
          </span>
        </div>
        <div className="free-cv-en-group207055">
          <span className="free-cv-en-text2">New job needs new CV</span>
          <span className="free-cv-en-text3">
            FreeCV builder + 10 minutes= your new professional CV
          </span>
        </div>
        <a
          href={props.Freecv_btn}
          target="_blank"
          rel="noreferrer noopener"
          className="free-cv-en-link"
        >
          <div
            onClick={props.Freecv_btnClick}
            className="free-cv-en-frameprimarydefaultm"
          >
            <span className="free-cv-en-text4">Create my CV</span>
          </div>
        </a>
      </div>
    </div>
  )
}

FreeCVEn.defaultProps = {
  Freecv_btnClick: () => {},
  IMAGE1stimg1_src: '/IMAGE1stimg1431-dli5.png',
  IMAGE1stimg1_alt: 'IMAGE1stimg1431',
  Freecv_btn: '',
}

FreeCVEn.propTypes = {
  Freecv_btnClick: PropTypes.func,
  IMAGE1stimg1_src: PropTypes.string,
  IMAGE1stimg1_alt: PropTypes.string,
  Freecv_btn: PropTypes.string,
}

export default FreeCVEn
