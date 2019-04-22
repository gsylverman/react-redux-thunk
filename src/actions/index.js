

const numb = (p) => {
    if (p === "PLUS") {
        return {
            type: "UP",
            payload: 1
        }
    } else if (p === "MINUS") {
        return {
            type: "DOWN",
            payload: 1
        }
    }

};
export const numberAction = (p) => {

    return dispatch => {
        setTimeout(() => {
            return dispatch(numb(p));
        }, 5000)
    }
};
