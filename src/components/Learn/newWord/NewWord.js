import React, { useState } from "react";
import db from "../../../firebaseDb";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import styles from "./newWord.module.css";
import { useBodyClass } from "../../../Custom Hook/useBodyClass";
import HomeButton from "../HomeButton/HomeButton";

export default function NewWord() {
  useBodyClass(styles["learn-home-page"]);
  const [database, setDatabase] = useState("words");
  const [cuvantRomana, setCuvantRomana] = useState("");
  const [cuvantEngleza, setCuvantEngleza] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleNew(database);
    setCuvantRomana("");
    setCuvantEngleza("");
  }

  const handleNew = async (collectionName) => {
    const collectionRef = collection(db, collectionName);
    const payload = {
      name: cuvantRomana,
      value: cuvantEngleza,
      timestamp: serverTimestamp(),
    };

    await addDoc(collectionRef, payload);
  };
  return (
    <div className={styles.backgroundCenter}>
      <div className={styles.column}>
        <img
          src={require(".././images/add.png")}
          alt="Dream"
          className={styles.dreamImage}
        />{" "}
        <div className={styles.display}>
          <div className={styles.containerPrincipal}>
            <div className={styles.container}>
              <form onSubmit={handleSubmit}>
                {/* <Button to="/exercise"  type='button1'>Exerseaza</Button> */}
                <div className={styles.containerCenter}>
                  <div>
                    <select
                      className={styles.button1}
                      value={database}
                      onChange={(e) => setDatabase(e.target.value)}
                    >
                      <option value="words">Just Words</option>
                      <option value="jobs">Jobs</option>
                      <option value="animals">Animals</option>
                    </select>
                    {/* <button className={styles.button1}>Just Word</button> */}
                  </div>

                  <div>
                    <input
                      className={styles.inputBox}
                      placeholder="Cuvant în română"
                      value={cuvantRomana}
                      onChange={(e) => setCuvantRomana(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <input
                      className={styles.inputBox}
                      placeholder="Cuvant în engleză"
                      value={cuvantEngleza}
                      onChange={(e) => setCuvantEngleza(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <button className={styles.button3}>Add Word</button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.lastButton}>
              <HomeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
