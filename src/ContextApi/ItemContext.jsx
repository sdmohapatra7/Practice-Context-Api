import { createContext, useState, useContext } from "react";
import CartModal from '../components/CartModal'

const ItemContext = createContext(null);

function useValue() {
    const value = useContext(ItemContext);
    return value;
}

function CustomItemContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const[showCart,setShowCart] = useState(false);
    const [cart,setCart]= useState([]);

    const handleAdd = (prod) => {
        console.log(prod);
        const index = cart.findIndex((item)=>item.id === prod.id);
        if(index === -1){
            setCart([...cart,{...prod,qty:1}]);
            setTotal(total+prod.price);
        }else{
            cart[index].qty++;
            setCart(cart);
            setTotal(total+cart[index].price);
        }
        setItem(item+1);
    };
    // console.log(cart);

    const handleRemove = (id) => {
        // if (total <= 0) {
        //     return;
        // }
        const index = cart.findIndex((item)=>item.id===id);
        if(index !== -1){
            cart[index].qty--;
            setItem(item - 1);
            setTotal(total-cart[index].price);
            if(cart[index].qty ==0){
                cart.splice(index,1);
            }
        }
        setCart(cart);
        
    };
    const handleClear = ()=>{
        setItem(0);
        setTotal(0);
        setCart([]);
    }

    const cartToggle = ()=>{
        setShowCart(!showCart);
    }


    return (
        <ItemContext.Provider value={{ total, handleAdd, item,handleRemove,handleClear,cartToggle,cart }}>
            {showCart && <CartModal />}
            {children}
        </ItemContext.Provider>
    );
}

export { ItemContext, useValue };
export default CustomItemContext;
