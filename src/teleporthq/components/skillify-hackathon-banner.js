import React from 'react'

import PropTypes from 'prop-types'

import './skillify-hackathon-banner.css'

const SkillifyHackathonBanner = (props) => {
  return (
    <a href={props.link_container} target="_blank" rel="noreferrer noopener">
      <div className="skillify-hackathon-banner-container">
        <div className="skillify-hackathon-banner-frame206871">
          <div className="skillify-hackathon-banner-container1">
            <div className="skillify-hackathon-banner-info-wrapper">
              <p className="skillify-hackathon-banner-title DesktopH3">
                {props.Title}
              </p>
              <p className="skillify-hackathon-banner-subtitle">
                {props.Description}
              </p>
            </div>
            <button className="skillify-hackathon-banner-buttons">
              <span className="skillify-hackathon-banner-text">
                {props.Button}
              </span>
            </button>
          </div>
          <img
            src="/zbudzhimg.png"
            className="skillify-hackathon-banner-zbudzhicon"
          />
        </div>
      </div>
    </a>
  )
}

SkillifyHackathonBanner.defaultProps = {
  link_container: '',
  Frame_LinkClick: () => {},
  Frame_Link: '',
  Title: 'Unleash your growth!',
  Description:
    'Acquire tailored development plans crafted just for you, accompanied by seasoned mentors prepared to guide you through each step.',
  Button: 'Begin your free journey',
}

SkillifyHackathonBanner.propTypes = {
  link_container: PropTypes.string,
  Frame_LinkClick: PropTypes.func,
  Frame_Link: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Button: PropTypes.string,
}

export default SkillifyHackathonBanner
