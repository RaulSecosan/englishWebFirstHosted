import React, { useEffect, useState } from "react";

import styles from "./justWords.module.css";
import SideMenu from "../../../SideMenu";
import { useBodyClass } from "../../../../Custom Hook/useBodyClass";

export default function JustWords() {
  useBodyClass(styles["backgroundColor"]);

  const words = [
    { Engleza: "Word", Romana: "Cuvant" },
    { Engleza: "Learn", Romana: "Invata" },
  ];
  const [word, setWord] = useState(words[0].Engleza);
  const [click, setClick] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setWord(click ? words[index].Engleza : words[index].Romana);
  }, [click, index]);

  function handleWord() {
    setClick(!click);
    // click ? setWord(words[index].Romana) : setWord(words[index].Engleza);
  }

  console.log(index);
  console.log(click);
  console.log(words.length);
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
            <button
              className={styles.button}
              onClick={() => (index === 0 ? 0 : setIndex(index - 1))}
            >
              ←
            </button>
            <button
              className={styles.button}
              onClick={() =>
                index === words.length - 1
                  ? setIndex(index - 1)
                  : setIndex(index + 1)
              }
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
