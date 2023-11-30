import React from 'react'

import PropTypes from 'prop-types'

import './free-cv-de.css'

const FreeCVDe = (props) => {
  return (
    <div className="free-cv-de-container">
      <div className="free-cv-de-freecv4">
        <div className="free-cv-de-frame1stimg">
          <div className="free-cv-de-group207042">
            <div className="free-cv-de-group207073">
              <img
                alt={props.IMAGE1stimg1_alt}
                src={props.IMAGE1stimg1_src}
                className="free-cv-de-image1stimg1"
              />
            </div>
          </div>
          <img
            alt="Rectangle4448199"
            src="/Rectangle4448199-udx8.svg"
            className="free-cv-de-rectangle4448"
          />
          <span className="free-cv-de-text">AI-Werkzeuge</span>
        </div>
        <div className="free-cv-de-group207055">
          <span className="free-cv-de-text1">
            Neuer Job braucht neuen Lebenslauf
          </span>
          <span className="free-cv-de-text2">
            <span>
              FreeCV builder + 10 Minuten
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>= Ihr neuer professioneller Lebenslauf</span>
          </span>
        </div>
        <a
          href={props.Freecv_btn}
          target="_blank"
          rel="noreferrer noopener"
          className="free-cv-de-link"
        >
          <div
            onClick={props.Freecv_btnClick}
            className="free-cv-de-frameprimarydefaultm"
          >
            <span className="free-cv-de-text6">Lebenslauf erstellen</span>
          </div>
        </a>
      </div>
    </div>
  )
}

FreeCVDe.defaultProps = {
  Freecv_btnClick: () => {},
  IMAGE1stimg1_src: '/IMAGE1stimg1431-dli5.png',
  IMAGE1stimg1_alt: 'IMAGE1stimg1431',
  Freecv_btn: '',
}

FreeCVDe.propTypes = {
  Freecv_btnClick: PropTypes.func,
  IMAGE1stimg1_src: PropTypes.string,
  IMAGE1stimg1_alt: PropTypes.string,
  Freecv_btn: PropTypes.string,
}

export default FreeCVDe
