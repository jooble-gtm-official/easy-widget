import React from 'react'

import PropTypes from 'prop-types'

import './super-banner.css'

const SuperBanner = (props) => {
  return (
    <div className="super-banner-container">
      <span className="super-banner-title">{props.superBannerTitle}</span>
      <span className="super-banner-subtitle">{props.superBannerSubtitle}</span>
      <span className="super-banner-description">
        {props.superBannerDescription}
      </span>
      <span className="super-banner-region">{props.superBannerRegion}</span>
    </div>
  )
}

SuperBanner.defaultProps = {
  superBannerSubtitle: 'Subtitle',
  superBannerTitle: 'Title',
  superBannerDescription: 'Description',
  superBannerRegion: 'region',
}

SuperBanner.propTypes = {
  superBannerSubtitle: PropTypes.string,
  superBannerTitle: PropTypes.string,
  superBannerDescription: PropTypes.string,
  superBannerRegion: PropTypes.string,
}

export default SuperBanner
