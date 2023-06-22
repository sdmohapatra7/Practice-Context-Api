import { createContext, useState, useContext } from "react";

const ItemContext = createContext(null);

function useValue() {
    const value = useContext(ItemContext);
    return value;
}

function CustomItemContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const handleAdd = (price) => {
        setTotal(total + price);
        setItem(item + 1);
    };

    const handleRemove = (price) => {
        if (total <= 0) {
            return;
        }
        setTotal((prevState) => prevState - price);
        setItem(item - 1);
    };
    const handleClear = ()=>{
        setItem(0);
        setTotal(0);
    }


    return (
        <ItemContext.Provider value={{ total, handleAdd, item,handleRemove,handleClear }}>
            {children}
        </ItemContext.Provider>
    );
}

export { ItemContext, useValue };
export default CustomItemContext;
