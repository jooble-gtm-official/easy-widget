import React from 'react'

import PropTypes from 'prop-types'

import './multiple-links.css'

const MultipleLinks = (props) => {
  return (
    <div className="multiple-links-container">
      <a
        href={props.driverJobsUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.driverJobsClick}
      >
        {props.driverJobsText}
      </a>
      <a
        href={props.managerJobsUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.managerJobsClick}
        className="multiple-links-link1"
      >
        {props.managerJobsText}
      </a>
    </div>
  )
}

MultipleLinks.defaultProps = {
  driverJobsText: 'Driver Jobs',
  driverJobsUrl: '',
  managerJobsText: 'Manager Jobs',
  managerJobsUrl: '',
  driverJobsClick: () => {},
  managerJobsClick: () => {},
}

MultipleLinks.propTypes = {
  driverJobsText: PropTypes.string,
  driverJobsUrl: PropTypes.string,
  managerJobsText: PropTypes.string,
  managerJobsUrl: PropTypes.string,
  driverJobsClick: PropTypes.func,
  managerJobsClick: PropTypes.func,
}

export default MultipleLinks
