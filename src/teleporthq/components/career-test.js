import React from 'react'

import PropTypes from 'prop-types'

import './career-test.css'

const CareerTest = (props) => {
  return (
    <div className="career-test-container">
      <div className="career-test-frame1427">
        <div className="career-test-frame1425">
          <div className="career-test-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="career-test-image"
            />
          </div>
          <div className="career-test-frame1421">
            <div className="career-test-frame1418">
              <span className="career-test-text">CareerBannerTitle</span>
              <span className="career-test-text1">CareerBannerDescription</span>
            </div>
          </div>
        </div>
        <div className="career-test-frame1426">
          <button className="career-test-buttons">
            <span className="career-test-text2">CareerBannerStart</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="career-test-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

CareerTest.defaultProps = {
  rootClassName: '',
  onClick: () => {},
  image_alt: 'image',
  image_src: '/career-test.png',
}

CareerTest.propTypes = {
  rootClassName: PropTypes.string,
  onClick: PropTypes.func,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default CareerTest
