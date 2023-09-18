import React from 'react'

import PropTypes from 'prop-types'

import './teraz-recruit.css'

const TerazRecruit = (props) => {
  return (
    <div className="teraz-recruit-container">
      <div className="teraz-recruit-frame1427">
        <div className="teraz-recruit-frame1425">
          <div className="teraz-recruit-img">
            <img
              src="/img31122-v5vp.png"
              alt="img31122"
              className="teraz-recruit-img31"
            />
          </div>
          <div className="teraz-recruit-frame1421">
            <div className="teraz-recruit-frame1418">
              <span className="teraz-recruit-text MobileH2">
                <span>Працюй рекрутером віддалено</span>
              </span>
              <span className="teraz-recruit-text2 ParagraphP16(default)">
                <span>
                  Заробляй до 8000 грн за кожного працевлаштованого кандидата
                </span>
              </span>
            </div>
          </div>
        </div>
        <a
          href={props.Link_URL}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.Link_Click}
          className="teraz-recruit-buttons"
        >
          <span className="teraz-recruit-text4">
            <span>Стати рекрутером</span>
          </span>
        </a>
      </div>
    </div>
  )
}

TerazRecruit.defaultProps = {
  Link_URL: '',
  Link_Click: () => {},
}

TerazRecruit.propTypes = {
  Link_URL: PropTypes.string,
  Link_Click: PropTypes.func,
}

export default TerazRecruit
