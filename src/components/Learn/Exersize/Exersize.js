import React from "react";

import styles from "./exersize.module.css";
import SideMenu from "../../SideMenu";
import { useBodyClass } from "../../../Custom Hook/useBodyClass";

export default function Exersize() {
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
          <button className={styles.button1}>Just Words</button>

          <div className={styles.columnButton}>
            <button className={styles.button}>Jobs</button>
            <button className={styles.button}>Animals</button>
          </div>
        </div>
      </div>
    </div>
  );
}
