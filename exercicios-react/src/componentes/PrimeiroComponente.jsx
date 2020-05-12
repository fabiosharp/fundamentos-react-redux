import React from 'react';


let isLegal = false;
export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.AbCd}</h2>
        <h3>{isLegal ? 'Sim' : 'Não'}</h3>

    </div>
)

/* export default () => (
    <h1>Primeiro componente</h1>
)
 */


/* function primeiro() {
    return <h1>Primeiro componente</h1>;
}

export default primeiro; */