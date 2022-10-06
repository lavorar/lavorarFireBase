import React from 'react'

import PropTypes from 'prop-types'

import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles['card']}>
      <div className={styles['frame45']}>
        <span className={styles['text']}>
          <span>Osmar Amarilla</span>
        </span>
        <img
          src={props.Vector_src}
          alt={props.Vector_alt}
          className={styles['vector']}
        />
      </div>
      <div className={styles['avatar']}>
        <div className={styles['frame-avatarmaster']}>
          <div className={styles['onlineindicator']}>
            <div className={styles['frame-avataronlineindicator']}></div>
          </div>
        </div>
      </div>
      <div className={styles['frame43']}>
        <img
          src={props.carbonlocationfilled_src}
          alt={props.carbonlocationfilled_alt}
          className={styles['carbonlocationfilled']}
        />
        <span className={styles['text02']}>
          <span>Neuquen, Neuqen</span>
        </span>
      </div>
      <div className={styles['frame44']}>
        <img
          src={props.antdesignstarfilled_src}
          alt={props.antdesignstarfilled_alt}
          className={styles['antdesignstarfilled']}
        />
        <img
          src={props.antdesignstarfilled_src1}
          alt={props.antdesignstarfilled_alt1}
          className={styles['antdesignstarfilled1']}
        />
        <img
          src={props.antdesignstarfilled_src2}
          alt={props.antdesignstarfilled_alt2}
          className={styles['antdesignstarfilled2']}
        />
        <img
          src={props.antdesignstarfilled_src3}
          alt={props.antdesignstarfilled_alt3}
          className={styles['antdesignstarfilled3']}
        />
        <img
          src={props.antdesignstarfilled_src4}
          alt={props.antdesignstarfilled_alt4}
          className={styles['antdesignstarfilled4']}
        />
        <span className={styles['text04']}>
          <span>(13)</span>
        </span>
      </div>
      <div className={styles['frame39']}>
        <span className={styles['text06']}>
          <span>Categoria</span>
        </span>
        <img
          src={props.bidot_src}
          alt={props.bidot_alt}
          className={styles['bidot']}
        />
        <span className={styles['text08']}>
          <span>Categoria</span>
        </span>
      </div>
      <img
        src={props.Line2_src}
        alt={props.Line2_alt}
        className={styles['line2']}
      />
      <span className={styles['text10']}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt......
        </span>
      </span>
      <div className={styles['frame46']}>
        <span className={styles['text12']}>
          <span>$5000</span>
        </span>
        <div className={styles['frame19']}>
          <span className={styles['text14']}>
            <span>ver</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  Line2_src: '/playground_assets/line23184-czl.svg',
  Line2_alt: 'Line23184',
  Vector_src: '/playground_assets/vector3184-stma.svg',
  Vector_alt: 'Vector3184',
  carbonlocationfilled_src:
    '/playground_assets/carbonlocationfilled3184-3wk.svg',
  carbonlocationfilled_alt: 'carbonlocationfilled3184',
  antdesignstarfilled_src:
    '/playground_assets/antdesignstarfilled3184-8lr7.svg',
  antdesignstarfilled_alt: 'antdesignstarfilled3184',
  antdesignstarfilled_src1:
    '/playground_assets/antdesignstarfilled3184-xe0l.svg',
  antdesignstarfilled_alt1: 'antdesignstarfilled3184',
  antdesignstarfilled_src2:
    '/playground_assets/antdesignstarfilled3184-q1hq.svg',
  antdesignstarfilled_alt2: 'antdesignstarfilled3184',
  antdesignstarfilled_src3:
    '/playground_assets/antdesignstarfilled3184-ixpt.svg',
  antdesignstarfilled_alt3: 'antdesignstarfilled3184',
  antdesignstarfilled_src4:
    '/playground_assets/antdesignstarfilled3184-660e.svg',
  antdesignstarfilled_alt4: 'antdesignstarfilled3184',
  bidot_src: '/playground_assets/bidot3184-i0yx.svg',
  bidot_alt: 'bidot3184',
}

Card.propTypes = {
  Line2_src: PropTypes.string,
  Line2_alt: PropTypes.string,
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  carbonlocationfilled_src: PropTypes.string,
  carbonlocationfilled_alt: PropTypes.string,
  antdesignstarfilled_src: PropTypes.string,
  antdesignstarfilled_alt: PropTypes.string,
  antdesignstarfilled_src1: PropTypes.string,
  antdesignstarfilled_alt1: PropTypes.string,
  antdesignstarfilled_src2: PropTypes.string,
  antdesignstarfilled_alt2: PropTypes.string,
  antdesignstarfilled_src3: PropTypes.string,
  antdesignstarfilled_alt3: PropTypes.string,
  antdesignstarfilled_src4: PropTypes.string,
  antdesignstarfilled_alt4: PropTypes.string,
  bidot_src: PropTypes.string,
  bidot_alt: PropTypes.string,
}

export default Card