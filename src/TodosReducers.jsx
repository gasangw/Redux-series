export const INITIAL_STATE =[]

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export default todoReducer;