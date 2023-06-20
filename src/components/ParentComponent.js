import React, { useState } from 'react';
import ChildComponents from './ChildComponents';
import { ColorContext } from '../ContextApi/ColorContext';

export default function ParentComponent() {
    const [color, setColor] = useState('#000000');
    return (
        <>
            <ColorContext.Provider value={{color,setColor}}>
            <h1>Pick A Color</h1>
            <input type='color' value={color} onChange={(e) => { setColor(e.target.value) }} />
            <ChildComponents  />
            </ColorContext.Provider>
        </>
    )
}
