import React from 'react'

import PropTypes from 'prop-types'

import './new-banner.css'

const NewBanner = (props) => {
  return (
    <div className={`new-banner-container ${props.rootClassName} `}>
      <span className="new-banner-text">New cool banner</span>
      <span onClick={props.onClick1} className="new-banner-text1">
        Send Statistics
      </span>
      <span onClick={props.onClick2} className="new-banner-text2">
        Send Statistics And Open Link
      </span>
    </div>
  )
}

NewBanner.defaultProps = {
  text: 'Ne',
  rootClassName: '',
  onClick1: () => {},
  onClick2: () => {},
}

NewBanner.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
}

export default NewBanner
