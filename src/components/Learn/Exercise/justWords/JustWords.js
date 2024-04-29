import React, { useEffect, useState } from "react";

import styles from "./justWords.module.css";
import SideMenu from "../../../SideMenu";
import { useBodyClass } from "../../../../Custom Hook/useBodyClass";
import useFirestore from "../../../Display";

export default function JustWords() {
  useBodyClass(styles["backgroundColor"]);

  // const words = [
  //   { Engleza: "Word", Romana: "Cuvant" },
  //   { Engleza: "Learn", Romana: "Invata" },
  // ];
  const words = useFirestore("words");
  // const [word, setWord] = useState(jobs[0].name);
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
      <SideMenu color={"red"} />

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
      </div>
    </div>
  );
}
