import React from 'react'

import PropTypes from 'prop-types'

import './test-widget.css'

const TestWidget = (props) => {
  return (
    <div className="test-widget-container">
      <div className="test-widget-frame1427">
        <div className="test-widget-frame1425">
          <div className="test-widget-img">
            <div className="test-widget-group206789">
              <img
                src="/Rectangle484118-i2p.png"
                alt="Rectangle484118"
                className="test-widget-rectangle484"
              />
            </div>
            <div className="test-widget-group206780">
              <img
                src="/gettyimagesoBncwjFEp98unsplash1128-n43t.png"
                alt="gettyimagesoBncwjFEp98unsplash1128"
                className="test-widget-gettyimageso-bncwj--ep98unsplash1"
              />
            </div>
            <div className="test-widget-group206805">
              <div className="test-widget-group1305">
                <img
                  src="/Ellipse21131-j8qc.png"
                  alt="Ellipse21131"
                  className="test-widget-ellipse21"
                />
                <img
                  src="/Ellipse22132-gebr.png"
                  alt="Ellipse22132"
                  className="test-widget-ellipse22"
                />
              </div>
              <div className="test-widget-checkmark">
                <img
                  src="/IMAGE2714FE0FCheckMark1024px01031134-c9qu.png"
                  alt="IMAGE2714FE0FCheckMark1024px01031134"
                  className="test-widget-image2714fe0-check-mark1024px01031"
                />
              </div>
            </div>
            <div className="test-widget-group1302">
              <img
                src="/Ellipse21136-zyf2i.png"
                alt="Ellipse21136"
                className="test-widget-ellipse211"
              />
              <img
                src="/Ellipse22137-084a.png"
                alt="Ellipse22137"
                className="test-widget-ellipse221"
              />
              <div className="test-widget-whitequestionmark">
                <img
                  src="/IMAGE2754WhiteQuestionMark1024px010111139-a9cg.png"
                  alt="IMAGE2754WhiteQuestionMark1024px010111139"
                  className="test-widget-image275-white-question-mark1024px010111"
                />
              </div>
            </div>
            <div className="test-widget-group1304">
              <img
                src="/Ellipse21141-vvs.png"
                alt="Ellipse21141"
                className="test-widget-ellipse212"
              />
              <img
                src="/Ellipse22142-ewld.png"
                alt="Ellipse22142"
                className="test-widget-ellipse222"
              />
              <div className="test-widget-plus">
                <img
                  src="/IMAGE2795PlusSign1024px01021144-ejzm.png"
                  alt="IMAGE2795PlusSign1024px01021144"
                  className="test-widget-image279-plus-sign1024px01021"
                />
              </div>
            </div>
          </div>
          <div className="test-widget-frame1421">
            <div className="test-widget-frame1418">
              <span className="test-widget-text">{props.header}</span>
              <span className="test-widget-text01 ParagraphP16(default)">
                {props.description}
              </span>
            </div>
          </div>
        </div>
        <div className="test-widget-frame1426">
          <button className="test-widget-buttons">
            <span className="test-widget-text02">
              <span>Start free test</span>
            </span>
            <img
              src="/arrowrightup153-lrdq.svg"
              alt="arrowrightup153"
              className="test-widget-arrowrightup"
            />
          </button>
        </div>
        <span className="test-widget-text04">
          <span>Footer</span>
          <br></br>
        </span>
        <span className="test-widget-text07">
          <span>Footer</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

TestWidget.defaultProps = {
  header: 'Default Header',
  description: 'Default description',
}

TestWidget.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
}

export default TestWidget
