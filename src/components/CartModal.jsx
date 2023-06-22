import React from "react";
import { useValue } from "../ContextApi/ItemContext";
import styles from "../styles/CartModal.module.css";

function CartModal() {
    const{cart,handleClear,total,cartToggle}=useValue();
    return (
        <div className={styles.cartModal}>
            <div className={styles.closeButton} onClick={cartToggle}>
                Close
            </div>
            <div className={styles.clearButton} onClick={handleClear}>Clear</div>
            <div className={styles.itemContainer}>
                {cart.map((item)=>(
                    <div className={styles.cartCard} key={item.id}>
                        <h1>{item.name}</h1>
                        <h3>X {item.qty}</h3>
                        <h3>X {item.qty * item.price}</h3>
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <div className={styles.totalText}>Total</div>
                <div className={styles.totalPrice}>${total}</div>
            </div>
        </div>
    );
}

export default CartModal;