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
              <span className="career-test-text">
                {props.careerBannerTitle}
              </span>
              <span className="career-test-text1">
                {props.careerBannerDescription}
              </span>
            </div>
          </div>
        </div>
        <div className="career-test-frame1426">
          <button className="career-test-buttons">
            <span className="career-test-text2">{props.careerBannerStart}</span>
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
  image_alt: 'image',
  rootClassName: '',
  onClick: () => {},
  image_src: '/career-test.png',
  careerBannerStart: 'Start',
  careerBannerTitle: 'Title',
  careerBannerDescription: 'Description',
}

CareerTest.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  onClick: PropTypes.func,
  image_src: PropTypes.string,
  careerBannerStart: PropTypes.string,
  careerBannerTitle: PropTypes.string,
  careerBannerDescription: PropTypes.string,
}

export default CareerTest
