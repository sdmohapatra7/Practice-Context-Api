// import React,{useContext} from "react";
import styles from "../styles/Navbar.module.css";
// import { TotalContext } from "../ContextApi/TotalContext";
// import { ItemContext } from "../ContextApi/ItemContext";
import { useValue } from "../ContextApi/ItemContext";

function Navbar() {
  // const {total} = useContext(TotalContext);
  const {item,total,handleClear,cartToggle} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={cartToggle}>Cart</button>
        <button className={styles.button} onClick={handleClear}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
