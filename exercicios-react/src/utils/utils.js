import React from 'react';

export function filhosComProps(props){
    return React.Children.map(props.children, c => {
        return React.cloneElement(c, { ...props })
    })
}