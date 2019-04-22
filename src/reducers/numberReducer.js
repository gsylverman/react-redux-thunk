const initialState = {
    number: 0
};

const numberReducer = (state = initialState, action) => {
    console.log(action.type)
    const newState = { ...state };
    switch (action.type) {

        case "UP":
            newState.number += 1;
            break;

        case "DOWN":
            newState.number -= 1;
            break;
        default:
            break;
    }
    return newState;
};

export default numberReducer;