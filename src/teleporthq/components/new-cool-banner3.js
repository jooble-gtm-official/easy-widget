import React from 'react'

import PropTypes from 'prop-types'

import './new-cool-banner3.css'

const NewCoolBanner3 = (props) => {
  return (
    <div className="new-cool-banner3-container">
      <span className="new-cool-banner3-text">Link</span>
      <span>
        <span>New Banner</span>
        <br></br>
        <br></br>
      </span>
    </div>
  )
}

NewCoolBanner3.defaultProps = {
  xxxxx: '',
  onClick: () => {},
  button: 'Button',
  text: 'Text',
}

NewCoolBanner3.propTypes = {
  xxxxx: PropTypes.string,
  onClick: PropTypes.func,
  button: PropTypes.string,
  text: PropTypes.string,
}

export default NewCoolBanner3
