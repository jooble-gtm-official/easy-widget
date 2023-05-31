import React from 'react'

import PropTypes from 'prop-types'

import './new-banner.css'

const NewBanner = (props) => {
  return (
    <div className={`new-banner-container ${props.rootClassName} `}>
      <span className="new-banner-text">New cool banner</span>
    </div>
  )
}

NewBanner.defaultProps = {
  text: 'Ne',
  rootClassName: '',
}

NewBanner.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NewBanner
