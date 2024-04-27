import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({children, to, disabled,type,onClick}) => {
    if(to) return(
        <Link to = {to} className={styles[type]}>
            {children}
        </Link>
    );

    if(onClick) return (
        <button onClick={onClick}  >
            {children}
        </button>
    )

    return (
        <button disabled={disabled} >
            {children}
        </button>
      );
}
 
export default Button;