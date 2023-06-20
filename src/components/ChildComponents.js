import React from 'react';
import GrandChildComponent from './GrandChildComponent';

export default function ChildComponents() {
    return (
        <div style={{
            border: '10px solid #000000',
            marginLeft: '50px',
            padding: '10px',
            fontSize: '30px',
            width: '300px'
        }}>
            <GrandChildComponent  />
        </div>
    )
}
