import React from 'react'

import PropTypes from 'prop-types'

import './multiple-links-widget.css'

const MultipleLinksWidget = (props) => {
  return (
    <div className="multiple-links-widget-container">
      <a
        href={props.applyUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.applyClick}
        className="multiple-links-widget-link"
      >
        {props.applyText}
      </a>
      <a
        href={props.saveUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.saveClick}
        className="multiple-links-widget-link1"
      >
        {props.saveText}
      </a>
    </div>
  )
}

MultipleLinksWidget.defaultProps = {
  applyText: 'Apply',
  applyUrl: '',
  saveText: 'Save',
  saveUrl: '',
  saveClick: () => {},
  applyClick: () => {},
}

MultipleLinksWidget.propTypes = {
  applyText: PropTypes.string,
  applyUrl: PropTypes.string,
  saveText: PropTypes.string,
  saveUrl: PropTypes.string,
  saveClick: PropTypes.func,
  applyClick: PropTypes.func,
}

export default MultipleLinksWidget
