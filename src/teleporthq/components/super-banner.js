import React from 'react'

import PropTypes from 'prop-types'

import './super-banner.css'

const SuperBanner = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer noopener">
      <div className="super-banner-container">
        <span className="super-banner-title">{props.superBannerTitle}</span>
        <span className="super-banner-subtitle">
          {props.superBannerSubtitle}
        </span>
        <span className="super-banner-description">
          {props.superBannerDescription}
        </span>
        <span className="super-banner-text">{props.superBannerCurrency}</span>
      </div>
    </a>
  )
}

SuperBanner.defaultProps = {
  superBannerSubtitle: 'Subtitle',
  superBannerTitle: 'Title',
  superBannerDescription: 'Description',
  link: '',
  superBannerCurrency: 'currency',
}

SuperBanner.propTypes = {
  superBannerSubtitle: PropTypes.string,
  superBannerTitle: PropTypes.string,
  superBannerDescription: PropTypes.string,
  link: PropTypes.string,
  superBannerCurrency: PropTypes.string,
}

export default SuperBanner
