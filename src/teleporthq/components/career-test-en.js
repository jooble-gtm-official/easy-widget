import React from 'react'

import PropTypes from 'prop-types'

import './career-test-en.css'

const CareerTestEn = (props) => {
  return (
    <div className={`career-test-en-container ${props.rootClassName} `}>
      <div className="career-test-en-frame1427">
        <div className="career-test-en-frame1425">
          <div className="career-test-en-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="career-test-en-image"
            />
          </div>
          <div className="career-test-en-frame1421">
            <div className="career-test-en-frame1418">
              <span className="career-test-en-text">
                Can&apos;t choose the right career path for you?
              </span>
              <span className="career-test-en-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="career-test-en-frame1426">
          <button onClick={props.onClick} className="career-test-en-buttons">
            <span className="career-test-en-text2">
              <span>Start free test</span>
            </span>
            <img
              alt="arrow-career-test"
              src="/assets/easy-widget/arrow-career-test.svg"
              className="career-test-en-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

CareerTestEn.defaultProps = {
  onClick: () => {},
  rootClassName: '',
  image_alt: 'image',
  image_src: '/assets/easy-widget/career-test.png',
}

CareerTestEn.propTypes = {
  onClick: PropTypes.func,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default CareerTestEn
