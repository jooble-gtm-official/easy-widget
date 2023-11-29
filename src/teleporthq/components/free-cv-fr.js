import React from 'react'

import PropTypes from 'prop-types'

import './free-cv-fr.css'

const FreeCVFr = (props) => {
  return (
    <div className="free-cv-fr-container">
      <div className="free-cv-fr-freecv4">
        <div className="free-cv-fr-frame1stimg">
          <div className="free-cv-fr-group207042">
            <div className="free-cv-fr-group207073">
              <img
                alt={props.IMAGE1stimg1_alt}
                src={props.IMAGE1stimg1_src}
                className="free-cv-fr-image1stimg1"
              />
            </div>
          </div>
          <img
            alt="Rectangle4448199"
            src="/Rectangle4448199-udx8.svg"
            className="free-cv-fr-rectangle4448"
          />
          <span className="free-cv-fr-text">Aide d&apos;AI Inclus</span>
        </div>
        <div className="free-cv-fr-group207055">
          <span className="free-cv-fr-text1">
            Un nouvel emploi nécessite un nouveau CV
          </span>
          <span className="free-cv-fr-text2">
            FreeCV builder + 10 minutes = votre nouveau CV professionnel
          </span>
        </div>
        <a
          href={props.Freecv_btn}
          target="_blank"
          rel="noreferrer noopener"
          className="free-cv-fr-link"
        >
          <div
            onClick={props.Freecv_btnClick}
            className="free-cv-fr-frameprimarydefaultm"
          >
            <span className="free-cv-fr-text3">Créer mon CV</span>
          </div>
        </a>
      </div>
    </div>
  )
}

FreeCVFr.defaultProps = {
  Freecv_btnClick: () => {},
  IMAGE1stimg1_alt: 'IMAGE1stimg1431',
  IMAGE1stimg1_src: '/IMAGE1stimg1431-dli5.png',
  Freecv_btn: '',
}

FreeCVFr.propTypes = {
  Freecv_btnClick: PropTypes.func,
  IMAGE1stimg1_alt: PropTypes.string,
  IMAGE1stimg1_src: PropTypes.string,
  Freecv_btn: PropTypes.string,
}

export default FreeCVFr
