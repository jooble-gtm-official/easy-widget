import React from 'react'

import PropTypes from 'prop-types'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <div className="test-frame1427">
        <div className="test-frame1425">
          <div className="test-img">
            <img
              alt={props.img21_alt}
              src={props.img21_src}
              className="test-img21"
            />
          </div>
          <div className="test-frame1421">
            <div className="test-frame1418">
              <span className="test-text">
                <span>Can&apos;t choose the right career path for you?</span>
              </span>
              <span className="test-text2">
                <span>
                  Take a quick free test to discover your ideal career and
                  receive a personalized Job Report
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="test-frame1426">
          <button className="test-buttons">
            <span className="test-text4">
              <span>Start free test</span>
            </span>
            <img
              alt="arrowrightup153"
              src="/arrowrightup153-2k0s.svg"
              className="test-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Test.defaultProps = {
  img21_alt: 'img21155',
  image_alt: 'image',
  img21_src: '/img21155-p7po.png',
  image_alt1: 'image',
  image_src1: 'aa460788-d72d-4eff-82d0-72e4c21e8e0b',
  image_src: 'aa460788-d72d-4eff-82d0-72e4c21e8e0b',
}

Test.propTypes = {
  img21_alt: PropTypes.string,
  image_alt: PropTypes.string,
  img21_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Test
