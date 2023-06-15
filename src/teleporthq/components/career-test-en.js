import React from 'react'

import PropTypes from 'prop-types'

import './career-test-en.css'

const CareerTestEn = (props) => {
  return (
    <div className="career-test-en-container">
      <div className="career-test-en-frame1427">
        <div className="career-test-en-img">
          <img
            alt="career_test"
            src="/assets/easy-widget/career_test.png"
            className="career-test-en-careertest"
          />
        </div>
        <div className="career-test-en-frame1425">
          <div className="career-test-en-frame1421">
            <div className="career-test-en-frame1418">
              <span className="career-test-en-text">
                <span>Can&apos;t choose the right career path for you?</span>
              </span>
              <span className="career-test-en-text2 ParagraphP16(default)23">
                <span>
                  Take a quick free test to discover your ideal career and
                  receive a personalized Job Report
                </span>
              </span>
            </div>
          </div>
        </div>
        <div onClick={props.onClick} className="career-test-en-frame1426">
          <button className="career-test-en-buttons">
            <span className="career-test-en-text4">
              <span>Start free test</span>
            </span>
            <img
              alt="career_test_arrow"
              src="/assets/easy-widget/career_test_arrow.svg"
              className="career-test-en-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

CareerTestEn.defaultProps = {
  onClick: () => { },
}

CareerTestEn.propTypes = {
  onClick: PropTypes.func,
}

export default CareerTestEn
