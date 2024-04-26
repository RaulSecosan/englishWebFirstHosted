import React from "react";

import styles from './learnHome.module.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useBodyClass } from "../../Custom Hook/useBodyClass";
import SideMenu from "../SideMenu";

export default function Learn() {
  // //Pentru a pune imaginea de fundal peste tot
  // useEffect(() => {
  //   // Când componenta se montează
  //   document.body.classList.add(styles['learn-home-page']);
  //   // Când componenta se demontează
  //   return () => {
  //     document.body.classList.remove(styles['learn-home-page']);
  //   };
  // }, []);
  useBodyClass(styles['learn-home-page']);

  return (
    <div className={styles.backgroundCenter}>
    <SideMenu color='red'/>
      <div className={styles.column}>
        <img
          src={require("./images/firstEyes.png")}
          alt="Eyes"
          className={styles.firstEyes}
        />{" "}
        <div className={styles.display}>
          <div>
            <Link to="/exersize">
              <button  className={styles.button1}>Exersează</button>
            </Link>
          </div>
          <div>
            <button className={styles.button1}>New Word</button>
          </div>
        </div>
      </div>
    </div>
  );
}
