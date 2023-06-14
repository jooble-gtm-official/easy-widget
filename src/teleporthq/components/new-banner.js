import React from 'react'

import PropTypes from 'prop-types'

import './new-banner.css'

const NewBanner = (props) => {
  return (
    <div className={`new-banner-container ${props.rootClassName} `}>
      <span className="new-banner-text">New cool banner</span>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.onClick1}
        className="new-banner-link"
      >
        Send Statistics
      </a>
      <span onClick={props.onClick2} className="new-banner-text1">
        Send Statistics And Open Link
      </span>
    </div>
  )
}

NewBanner.defaultProps = {
  onClick1: () => {},
  text: 'Ne',
  rootClassName: '',
  onClick2: () => {},
}

NewBanner.propTypes = {
  onClick1: PropTypes.func,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  onClick2: PropTypes.func,
}

export default NewBanner
