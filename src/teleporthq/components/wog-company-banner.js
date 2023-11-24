import React from 'react'

import PropTypes from 'prop-types'

import styles from './wog-company-banner.module.css'

const WogCompanyBanner = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['wog']}>
        <div className={styles['colorframe']}>
          <div className={styles['frame206888']}>
            <div className={styles['frame206887']}>
              <span className={styles['text']}>
                Долучайся до команди WOGонь 🔥
              </span>
              <span className={styles['text1']}>
                Шукаємо операторів, касирів та техробітників
              </span>
            </div>
            <div className={styles['frame206889']}>
              <img
                src={props.image_src1}
                alt={props.image_alt1}
                className={styles['image']}
              />
            </div>
          </div>
          <button className={styles['buttons']}>
            <span className={styles['text2']}>
              <span>Переглянути вакансії</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

WogCompanyBanner.defaultProps = {
  image_src: '023ae9ff-2a3d-49a2-8daa-2612c4a15638',
  image_alt: 'image',
  image_src1: '/wog_logo-200h.png',
  image_alt1: 'image',
}

WogCompanyBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default WogCompanyBanner
