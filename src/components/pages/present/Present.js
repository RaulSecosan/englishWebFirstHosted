import styles from './present.module.css';
import React, { useEffect, useState } from 'react';

export default function Present() {
    const [leftClick, setLeftClick] = useState(false)
    const [coutLeft, setCoutLeft] = useState(0)
    const [rightClick, setRightClick] = useState(false)
    const [animateLeft, setAnimateLeft] = useState(false);
    const [animateLeftText, setAnimateLeftText] = useState(false);
    const [animateRight, setAnimateRight] = useState(false);

    

    function handleLeftEnvelope (){
        setTimeout(() => setAnimateLeftText(!animateLeftText), 2000);
        setAnimateLeft(!animateLeft);
        
         setLeftClick(!leftClick);
        rightClick ? setRightClick(false) : setLeftClick(!leftClick);
    };

    function handleRightEnvelope (){
        setAnimateRight(true);
    };
  
 
  return (
    
    <div className={styles.bodyy}>
         <h1 className={styles.title}>Present ❤️❤️</h1>

       
        <p className={styles.paragraph}>Alege un pliculeț 🥸</p>

        <div className={styles.envelope}>
            <div className={styles.envelopeLeft} onClick={handleLeftEnvelope}>
                <img src={require('../../../assets/img//present/envelope.png')} alt="net" className="nav_logo"  />
                {/* {leftClick ?  <div className={styles.leftEnv}>Mâine 20 iulie 2024 mergem la Amazonia!</div> : <div  className={styles.leftEnvHeart}>❤️</div>} */}
             
                {/* {leftClick?  <div className={styles.paragraphAnimation}>Mâine 20 iulie 2024 mergem la Amazonia!</div> : <div className={`${styles.leftEnvHeart} ${animateLeft ? styles.leftEnvHeartAnimated : ''}`}>❤️</div>} */}
                    {animateLeft ? <div className={`${styles.leftEnvHeart} ${animateLeft ? styles.leftEnvHeartAnimated : ''}`}>❤️</div> : <div className={styles.leftEnvHeart}>❤️</div>}
                    {animateLeftText?  <div className={styles.paragraphAnimation}>Mâine 20 iulie 2024 mergem la Amazonia!</div> : ''}

            </div>

            <div className={styles.envelopeRight} onClick={handleRightEnvelope}>
                <img src={require('../../../assets/img//present/envelope.png')} alt="net" className="nav_logo" />
                {rightClick ?  <div className={styles.rightEnv}>E clar că mâine 20 iulie 2024 mergem la Amazonia!</div> : <div  className={styles.rightEnvHeart}>❤️</div>}
            </div>

        </div>

    </div>
  )
}
