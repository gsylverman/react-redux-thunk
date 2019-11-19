const initialState = {
    number: 0
};

const numberReducer = (state = initialState, action) => {
    console.log(action.type)
    const newState = { ...state };
    switch (action.type) {

        case "UP":
            newState.number += 1;
            return newState;

        case "DOWN":
            newState.number -= 1;
           return newState;;
        default:
            return state;
    }
    
};

export default numberReducer;
