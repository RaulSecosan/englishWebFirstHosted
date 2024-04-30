import React from "react";

import styles from "./learnHome.module.css";
import { useBodyClass } from "../../Custom Hook/useBodyClass";
import SideMenu from "../SideMenu";
import { Link, useNavigate } from "react-router-dom";
// import Button from "../Buttom/Button";

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
  useBodyClass(styles["learn-home-page"]);
  const navigate = useNavigate();
  return (
    <div className={styles.backgroundCenter}>
      <SideMenu color="red" />
      <div className={styles.column}>
        <img
          src={require("./images/firstEyes.png")}
          alt="Eyes"
          className={styles.firstEyes}
        />{" "}
        <div className={styles.display}>
          <div>
            {/* <Button to="/exercise"  type='button1'>Exerseaza</Button> */}
            <button
              className={styles.button1}
              onClick={() => navigate("/learn/exercise")}
            >
              Exersează
            </button>
          </div>
          <div>
            <button
              className={styles.button1}
              onClick={() => navigate("/learn/newWord")}
            >
              New Word
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
