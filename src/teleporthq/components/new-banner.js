import React from 'react'

import PropTypes from 'prop-types'

import './new-banner.css'

const NewBanner = (props) => {
  return (
    <div className={`new-banner-container ${props.rootClassName} `}>
      <span className="new-banner-text">New cool banner</span>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.onClick}
        className="new-banner-link"
      >
        Link
      </a>
    </div>
  )
}

NewBanner.defaultProps = {
  xxxxx: '',
  text: 'Ne',
  rootClassName: '',
  link: '',
  onClick: () => {},
}

NewBanner.propTypes = {
  xxxxx: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
}

export default NewBanner
