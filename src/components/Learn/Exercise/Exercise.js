import React from "react";

import styles from "./exercise.module.css";
import SideMenu from "../../SideMenu";
import { useBodyClass } from "../../../Custom Hook/useBodyClass";
import { Link } from "react-router-dom";

export default function Exercise() {
  useBodyClass(styles["backgroundColor"]);

  return (
    <div className={styles.backgroundCenter}>
      <SideMenu color={"red"} />

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
            <button className={styles.button}>Jobs</button>
            <button className={styles.button}>Animals</button>
          </div>
        </div>
      </div>
    </div>
  );
}
