import styles from "./someMath.module.css";

import React, { useState } from "react";

function SomeMath() {
  const [openAddition, setOpenAddition] = useState(false);
  const [firstNumber, setFirstNumber] = useState(randomNumber);
  const [secondNumber, setSecondNumber] = useState(randomNumber);
  const [isCorrect, setIsCorrect] = useState(false);


  function handleAddition() {
    setOpenAddition(true);
  }
  function add() {
    return firstNumber + secondNumber;
  }

  function randomNumber(params) {
    return Math.floor(Math.random() * 100);
}

function correct(){
    if(randomNumber() === add()){

        return 'Corect';
    } else return 'Nu';
}
function correct1(){
   if(add() === add()){
    setIsCorrect(true);
    setTimeout(() => {
        setFirstNumber(randomNumber);
        setSecondNumber(randomNumber);
        setIsCorrect(false);
    }, 1000); 
    return firstNumber + secondNumber;
   }

}
  return (
    <div className={styles.bodyy}>
      <div className={styles.title}>SomeMath</div>

      <div>
        Operations
        {!openAddition && (
          <ul>
            <li onClick={handleAddition}>Addition</li>
            <li>Substraction</li>
            <li>Multiplication</li>
            <li>Division</li>
          </ul>
        )}
        {openAddition && (
          <>
            <div className={styles.additionMathContainer}>
              <div className={styles.additionMath}>{firstNumber} + {secondNumber} = {isCorrect && add() +'👍🏻'}</div>
            </div>

            <div className={styles.additionMathContainer1}>
              <div className={styles.halfBox}>
                <div className={styles.mathBox} onClick={correct1}>{add()}</div>
                <div className={styles.mathBox}>{randomNumber()}</div>
              </div>

              <div className={styles.lastHalfBox}>
                <div className={styles.mathBox}>{randomNumber()}</div>
                <div className={styles.mathBox}>{randomNumber()}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SomeMath;
