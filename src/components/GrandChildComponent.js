import React from 'react';
import { ColorContext } from '../ContextApi/ColorContext';

export default function GrandChildComponent() {
    
    return (
        <ColorContext.Consumer>
        {/* consumer require a callback function */}
        {(value)=><p style={{ color: value.color }}>Color: {value.color}</p>}
        </ColorContext.Consumer>
        
    )
}
