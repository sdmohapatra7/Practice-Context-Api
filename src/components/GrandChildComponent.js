import React from 'react';

export default function GrandChildComponent(props) {
    return (
        <p style={{ color: props.color }}>Color: {props.color}</p>
    )
}
