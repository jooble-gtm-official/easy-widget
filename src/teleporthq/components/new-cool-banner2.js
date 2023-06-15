import React from 'react'

import PropTypes from 'prop-types'

import './new-cool-banner2.css'

const NewCoolBanner2 = (props) => {
  return (
    <div className="new-cool-banner2-container">
      <div className="new-cool-banner2-container1">
        <span className="new-cool-banner2-text">New cool banner</span>
        <span className="new-cool-banner2-text1">Link</span>
      </div>
    </div>
  )
}

NewCoolBanner2.defaultProps = {
  rootClassName: '',
  text: 'Ne',
  xxxxx: '',
  onClick: () => {},
  link: '',
}

NewCoolBanner2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  xxxxx: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
}

export default NewCoolBanner2
