import React from 'react'

import PropTypes from 'prop-types'

import './career-test-de.css'

const CareerTestDe = (props) => {
  return (
    <div className="career-test-de-container">
      <div className="career-test-de-frame1427">
        <div className="career-test-de-frame1425">
          <div className="career-test-de-img">
            <img
              alt="career_test"
              src="/assets/easy-widget/career_test.png"
              className="career-test-de-careertest"
            />
          </div>
          <div className="career-test-de-frame1421">
            <div className="career-test-de-frame1418">
              <span className="career-test-de-text">
                Sie können sich nicht für den richtigen Karriereweg entscheiden?
              </span>
              <span className="career-test-de-text1">
                Mit einem kostenlosen Schnelltest können Sie Ihren Traumberuf
                herausfinden und erhalten einen personalisierten Job Report
              </span>
            </div>
          </div>
        </div>
        <div onClick={props.onClick} className="career-test-de-frame1426">
          <button className="career-test-de-buttons">
            <span className="career-test-de-text2">Test starten</span>
            <img
              alt="career_test_arrow"
              src="/assets/easy-widget/career_test_arrow.svg"
              className="career-test-de-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

CareerTestDe.defaultProps = {
  onClick: () => { },
}

CareerTestDe.propTypes = {
  onClick: PropTypes.func,
}

export default CareerTestDe
