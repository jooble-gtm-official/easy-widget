import React from 'react'

import PropTypes from 'prop-types'

import './multiple-links-banner.css'

const MultipleLinksBanner = (props) => {
  return (
    <div className="multiple-links-banner-container">
      <a
        href={props.applyLinkUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.applyLinkClick}
        className="multiple-links-banner-link"
      >
        {props.applyLinkText}
      </a>
      <a
        href={props.saveLinkUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.saveLinkClick}
        className="multiple-links-banner-link1"
      >
        {props.saveLinkText}
      </a>
    </div>
  )
}

MultipleLinksBanner.defaultProps = {
  applyLinkText: 'Apply Link',
  applyLinkClick: () => {},
  saveLinkClick: () => {},
  saveLinkUrl: '',
  applyLinkUrl: '',
  saveLinkText: 'Save Link',
}

MultipleLinksBanner.propTypes = {
  applyLinkText: PropTypes.string,
  applyLinkClick: PropTypes.func,
  saveLinkClick: PropTypes.func,
  saveLinkUrl: PropTypes.string,
  applyLinkUrl: PropTypes.string,
  saveLinkText: PropTypes.string,
}

export default MultipleLinksBanner
