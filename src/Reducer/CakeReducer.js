
const initialState = {
  numofCakes: 10,
}

const CakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUY_CAKE' : return { 
      ...state, 
      numofCakes: state.numofCakes - action.payload,
    }
    default: return state
  }
};

export default CakeReducer;
