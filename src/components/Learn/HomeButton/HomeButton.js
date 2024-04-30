import { useNavigate } from "react-router-dom";
import styles from "./homeButton.module.css";
const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.button1} onClick={() => navigate("/learn")}>
      H
    </button>
  );
};

export default HomeButton;
