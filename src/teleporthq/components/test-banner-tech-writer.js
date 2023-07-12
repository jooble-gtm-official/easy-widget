import React from 'react'

import PropTypes from 'prop-types'

import './test-banner-tech-writer.css'

const TestBannerTechWriter = (props) => {
  return (
    <div className="test-banner-tech-writer-container">
      <div className="test-banner-tech-writer-frame1427">
        <div className="test-banner-tech-writer-frame1425">
          <div className="test-banner-tech-writer-frame1421">
            <div className="test-banner-tech-writer-frame1418">
              <span className="test-banner-tech-writer-text">
                Can&apos;t choose the right career path for you?
              </span>
            </div>
          </div>
        </div>
        <div className="test-banner-tech-writer-frame1426">
          <a
            href={props.freeLink}
            target="_blank"
            rel="noreferrer noopener"
            onClick={props.onFreeClick}
            className="test-banner-tech-writer-buttons"
          >
            <span className="test-banner-tech-writer-text1">
              Start free test
            </span>
          </a>
          <a
            href={props.paidLink}
            target="_blank"
            rel="noreferrer noopener"
            onClick={props.onPaidClick}
            className="test-banner-tech-writer-buttons1"
          >
            <span className="test-banner-tech-writer-text2">
              Start paid test
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

TestBannerTechWriter.defaultProps = {
  paidLink: '',
  onFreeClick: () => {},
  onPaidClick: () => {},
  freeLink: '',
}

TestBannerTechWriter.propTypes = {
  paidLink: PropTypes.string,
  onFreeClick: PropTypes.func,
  onPaidClick: PropTypes.func,
  freeLink: PropTypes.string,
}

export default TestBannerTechWriter
