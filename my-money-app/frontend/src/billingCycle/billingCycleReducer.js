const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            console.log('pay', action.payload)
            return { ...state, list: action.payload.data }
    
        default:
            return state;
    }
}