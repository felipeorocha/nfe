
import React, { useContext } from 'react';
import { StateContext } from './Context';

const InfoContext = props => {

    const { state, actions } = useContext(StateContext)

    const click = () => {
        actions.setPromo({
            name: "Novo valor a partir do Action"
        });
    }
    return (
        <div>
            <h1>
                Pegando dados do Store
            </h1>
            {state.promo}
            <br />
            <button onClick={click}> Atualizar o Estado </button>
        </div>
    )
}

export default InfoContext;