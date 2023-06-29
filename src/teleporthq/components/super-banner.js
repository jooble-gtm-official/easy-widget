import React from 'react'

import PropTypes from 'prop-types'

import './super-banner.css'

const SuperBanner = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer noopener">
      <div onClick={() => {}} className="super-banner-container">
        <span className="super-banner-title">{props.superBannerTitle}</span>
        <span className="super-banner-subtitle">
          {props.superBannerSubtitle}
        </span>
        <span className="super-banner-description">
          {props.superBannerDescription}
        </span>
        <span className="super-banner-region">{props.superBannerRegion}</span>
      </div>
    </a>
  )
}

SuperBanner.defaultProps = {
  superBannerTitle: 'Title',
  superBannerDescription: 'Description',
  superBannerRegion: 'region',
  link: '',
  superBannerSubtitle: 'Subtitle',
  onClick: '',
}

SuperBanner.propTypes = {
  superBannerTitle: PropTypes.string,
  superBannerDescription: PropTypes.string,
  superBannerRegion: PropTypes.string,
  link: PropTypes.string,
  superBannerSubtitle: PropTypes.string,
  onClick: PropTypes.string,
}

export default SuperBanner
