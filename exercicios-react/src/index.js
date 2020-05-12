import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'
// import CompA, {CompB as B} from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClass';
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <Hook/>

        {/* <Contador numeroInicial={220}/> */}
        {/* <ComponenteClasse valor="Sou um componente"/> */}

        {/* <Familia sobrenome="Medici">
            <Membro nome="Andre" sobrenome="Pereira"> </Membro>

        </Familia>

        <Familia sobrenome="Auditore de la Firenze">
            <Membro nome="Ezio" sobrenome="Arruda"> </Membro>
        </Familia>         */}

    </div>
, elemento);