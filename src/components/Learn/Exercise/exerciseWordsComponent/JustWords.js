import React, { useEffect, useState } from "react";

import styles from "./justWords.module.css";
import { useBodyClass } from "../../../../Custom Hook/useBodyClass";
import useFirestore from "../../../pages/display/Display";
import { useParams } from "react-router-dom";
import HomeButton from "../../HomeButton/HomeButton";

export default function JustWords() {
  useBodyClass(styles["backgroundColor"]);

  const { databaseSelected } = useParams();
  // console.log(databaseSelected);

  const words = useFirestore(databaseSelected);
  const [word, setWord] = useState("");
  const [click, setClick] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // setWord(click ? words[index].Engleza : words[index].Romana);
    setWord(click ? words[index].name : words[index].value);
  }, [click, index, words]);

  function handleWord() {
    setClick(!click);
    // click ? setWord(words[index].Romana) : setWord(words[index].Engleza);
  }
  function right() {
    index === words.length - 1 ? setIndex(0) : setIndex(index + 1);

    if (!click) return setClick(true);
    console.log(click);
  }

  function left() {
    if (index === 0) return 0;
    else setIndex(index - 1);
    if (!click) return setClick(true);
    console.log(click);
  }

  // console.log(index);
  // console.log(click);
  // console.log(words.length);
  return (
    <div className={styles.backgroundCenter}>

      <div className={styles.column}>
        <img
          src={require(click
            ? "../../images/openEyes.png"
            : "../../images/clesedEye.png")}
          alt="Eyes"
          className={styles.openEyes}
        />{" "}
        <div className={styles.display}>
          <button className={styles.button1} onClick={handleWord}>
            {word}
          </button>

          <div className={styles.columnButton}>
            <button className={styles.button} onClick={left}>
              ←
            </button>
            <button className={styles.button} onClick={right}>
              →
            </button>
          </div>
        </div>
        <HomeButton />
      </div>
    </div>
  );
}
