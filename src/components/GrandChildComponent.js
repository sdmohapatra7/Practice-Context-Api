import React,{useContext} from 'react';
import { ColorContext } from '../ContextApi/ColorContext';

export default function GrandChildComponent() {
    const color = useContext(ColorContext);
    return (
        <p style={{ color: color }}>Color: {color}</p>
    )
}
