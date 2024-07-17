import React from "react";

import styles from "./exercise.module.css";
import { useBodyClass } from "../../../Custom Hook/useBodyClass";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";

export default function Exercise() {
  useBodyClass(styles["backgroundColor"]);

  return (
    <div className={styles.backgroundCenter}>

      <div className={styles.column}>
        <img
          src={require("../images/secondEyes.png")}
          alt="Eyes"
          className={styles.firstEyes}
        />{" "}
        <div className={styles.display}>
          <Link to="/learn/exercise/words">
            <button className={styles.button1}>Just Words</button>
          </Link>
          <div className={styles.columnButton}>
            <Link to="/learn/exercise/jobs">
              <button className={styles.button}>Jobs</button>
            </Link>
            <Link to="/learn/exercise/animals">
              <button className={styles.button}>Animals</button>
            </Link>
          </div>
        </div>
        <HomeButton />
      </div>
    </div>
  );
}
