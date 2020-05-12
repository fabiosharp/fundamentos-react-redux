import React from 'react';

import Filho from './Filho'

export default props => {
    const notificacao = lugar => {alert(`Liberado para ${lugar}`)};

    return <Filho notificarSaida={notificacao}/>
}