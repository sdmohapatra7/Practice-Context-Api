import React, { useState } from 'react';
import ChildComponents from './ChildComponents';

export default function ParentComponent(props) {
    const [color, setColor] = useState('#000000');
    return (
        <>
            <h1>Pick A Color</h1>
            <input type='color' value={color} onChange={(e) => { setColor(e.target.value) }} />
            <ChildComponents color={color} />
        </>
    )
}
