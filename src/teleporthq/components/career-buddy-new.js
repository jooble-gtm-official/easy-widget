import React from 'react'

import PropTypes from 'prop-types'

import './career-buddy-new.css'

const CareerBuddyNew = (props) => {
  return (
    <div className="career-buddy-new-container">
      <div className="career-buddy-new-frame206871">
        <div className="career-buddy-new-container1">
          <div className="career-buddy-new-info-wrapper">
            <p className="career-buddy-new-title">{props.Title}</p>
            <div className="career-buddy-new-container2">
              <p className="career-buddy-new-subtitle">{props.Description}</p>
              <img
                alt="Shape1357"
                src="/Shape1357-rweq.svg"
                className="career-buddy-new-shape"
              />
            </div>
          </div>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            onClick={props.onClick}
            className="career-buddy-new-buttons"
          >
            <span className="career-buddy-new-text">{props.Button}</span>
          </a>
        </div>
        <img
          alt="Facewithsteamfromnose1361"
          src="/Facewithsteamfromnose1361-civm.svg"
          className="career-buddy-new-facewithsteamfromnose"
        />
      </div>
    </div>
  )
}

CareerBuddyNew.defaultProps = {
  Description: 'Заходь за підтримкою сюди',
  Frame_LinkClick: () => {},
  Title: 'Треба виговоритися по роботі?',
  Button: 'Telegram-чат Career Buddy',
  onClick: () => {},
  link: '',
}

CareerBuddyNew.propTypes = {
  Description: PropTypes.string,
  Frame_LinkClick: PropTypes.func,
  Title: PropTypes.string,
  Button: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
}

export default CareerBuddyNew
