import styles from './present.module.css';
import React, { useState } from 'react';

export default function Present() {
    const [leftClick, setLeftClick] = useState(false)
    const [rightClick, setRightClick] = useState(false)
    function handleLeftEnvelope (){
        setLeftClick(!leftClick);
        rightClick ? setRightClick(false) : setLeftClick(!leftClick);
    };
    function handleRightEnvelope (){
        setRightClick(!rightClick);
        leftClick ? setLeftClick(false) : setRightClick(!rightClick);

    };
   

  return (

    <div className={styles.bodyy} >
         <h1 className={styles.title}>Present ❤️❤️</h1>


        <p className={styles.paragraph}>Alege un pliculeț 🥸</p>

        <div className={styles.envelope}>
            <div className={styles.envelopeLeft} onClick={handleLeftEnvelope}>
                <img src={require('../../../assets/img//present/envelope.png')} alt="EnvelopeLeft" className="envelopeee"  />
                {leftClick ?  <div className={styles.leftEnv}>Mâine 20 iulie 2024 mergem la Amazonia!</div> : <div  className={styles.leftEnvHeart}>❤️</div>}
            </div>

            <div className={styles.envelopeRight} onClick={handleRightEnvelope}>
                <img src={require('../../../assets/img//present/envelope.png')} alt="EnvelopeRight" className="envelopeee" />
                {rightClick ?  <div className={styles.rightEnv}>E clar că mâine 20 iulie 2024 mergem la Amazonia!</div> : <div  className={styles.rightEnvHeart}>❤️</div>}
            </div>

        </div>

    </div>
  )
}