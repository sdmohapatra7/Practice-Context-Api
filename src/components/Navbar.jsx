import React,{useContext} from "react";
import styles from "../styles/Total.module.css";
import { ItemContext } from "../ContextApi/ItemContext";

function Navbar() {
  const {total} = useContext(ItemContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: 0</h1>
    </div>
  );
}

export default Navbar;
