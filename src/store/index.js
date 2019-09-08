import { createStore } from 'redux'

const INITIAL_STATE = {
    pastime: [],
    showModalError: false,
    modalErrorContent: {
        errorNumber: null, 
        errorTitle: null, 
        errorSubtitle: null,
        redirectTo: null  //todo modal error tem um botão que vai redirecionar para algum canto
    }
}

// Reducer
function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'SHOW_MODAL_ERROR' :
            return {...state, showModalError: true, modalErrorContent: action.modalErrorContent }  
        case 'CLOSE_MODAL':
            return {...state, showModalError: false }
        case 'ADD_PASTIME':
            return {...state, pastime: [...state.pastime, action.pastime]}
        default:
            return state
    }
}


const store = createStore(reducer)

export default store