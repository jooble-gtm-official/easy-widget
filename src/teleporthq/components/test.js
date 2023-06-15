import React from 'react'

import PropTypes from 'prop-types'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <div className="test-frame1427">
        <div className="test-container1">
          <img src="/img31013-0lpl.png" alt="img31013" className="test-img31" />
          <span className="test-text">
            <span>Can&apos;t choose the right career path for you?</span>
          </span>
          <span className="test-text2">
            <span>
              Take a quick free test to discover your ideal career and receive a
              personalized Job Report
            </span>
          </span>
        </div>
        <div className="test-link">
          <div className="test-link1">
            <span className="test-text4">
              <span>Start free test</span>
            </span>
            <img
              src="/arrowrightup34-13iv.svg"
              alt="arrowrightup34"
              className="test-arrowrightup"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Test.defaultProps = {
  onClick: () => {},
  link: '',
}

Test.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
}

export default Test
