const initialState = {
    numofIceCream : 10
}

 const IceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUY_ICECREAM' : return {
            ...state,
            numofIceCream: state.numofIceCream - 1
        }
        default: return state
    }
}

export default IceCreamReducer