import { createStore } from 'redux'

const INITIAL_STATE = {
    pastime: []
}

// Reducer
function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_PASTIME':
            return { ...state, pastime: [...state.data, action.pastime]}
        default:
            return state
    }
}


const store = createStore(reducer)

export default store