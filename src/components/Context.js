import React, { useState } from 'react';

const initialState = {
  promo: ''
};

export const StateContext = React.createContext(
  {
    state: initialState,
    actions: { setPromo: () => { } }
  });

const setPromo = (state, setState, promo) => {
    setState({ promo })
}

export const Context = props => {
    const [state, _setState] = useState(initialState)
    const setState = (_state) => {
        const newState = { ...state, ..._state }
        _setState(newState)
    }

    const actions = {
        setPromo: setPromo.bind(null, state, setState)
    }

    return (
        <StateContext.Provider value={{ state, actions }} >
            {props.children}
        </StateContext.Provider>
    );
}