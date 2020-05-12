import React from 'react';
import { findByLabelText } from '@testing-library/react';


export default props =>
    <div style={{display:"flex", height:"100%", justifyItems: "center"}}>
        <div style={{display: "inline-block"}}>
            <button onClick={() => props.notificarSaida('Shopping')}>
                Vou Sair
        </button>
        </div>
    </div>