import React from 'react'

import PropTypes from 'prop-types'

import './zbudzh-banner.css'

const ZbudzhBanner = (props) => {
  return (
    <div className="zbudzh-banner-container">
      <div className="zbudzh-banner-frame206885">
        <div className="zbudzh-banner-frame206817">
          <div className="zbudzh-banner-frame206816">
            <span className="zbudzh-banner-text DesktopH3">
              <span>Boost your career now!</span>
            </span>
            <span className="zbudzh-banner-text2 ParagraphP16(default)">
              <span>
                Your personal 10-minute daily skill simulator. Take the first
                step to career growth and success today!
              </span>
            </span>
          </div>
          <button className="zbudzh-banner-buttons">
            <span className="zbudzh-banner-text4">
              <span>Try it for free</span>
            </span>
          </button>
        </div>
        <div className="zbudzh-banner-container1">
          <img
            src={props.Frame2068791_src1}
            alt={props.Frame2068791_alt1}
            className="zbudzh-banner-frame2068791"
          />
        </div>
      </div>
    </div>
  )
}

ZbudzhBanner.defaultProps = {
  Frame2068791_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/726baac5-638e-4c00-a100-27802b868207/793c9aa1-b0fc-4616-bd96-41486781c254?org_if_sml=1140384',
  Frame2068791_alt: 'Frame20687911154',
  Frame2068791_src1: '/Frame20687911154-hqiv.png',
  Frame2068791_alt1: 'Frame20687911154',
}

ZbudzhBanner.propTypes = {
  Frame2068791_src: PropTypes.string,
  Frame2068791_alt: PropTypes.string,
  Frame2068791_src1: PropTypes.string,
  Frame2068791_alt1: PropTypes.string,
}

export default ZbudzhBanner
