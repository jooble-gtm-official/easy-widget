import React from 'react'

import PropTypes from 'prop-types'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <div className="test-frame1427">
        <div className="test-container1">
          <img alt="img31013" src="/img31013-0lpl.png" className="test-img31" />
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
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer noopener"
          className="test-link"
        >
          <div onClick={props.onClick} className="test-link1">
            <div className="test-link2">
              <span className="test-text4">
                <span>Start free test</span>
              </span>
              <img
                alt="arrowrightup34"
                src="/arrowrightup34-13iv.svg"
                className="test-arrowrightup"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

Test.defaultProps = {
  link: '',
  onClick: () => {},
}

Test.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
}

export default Test
