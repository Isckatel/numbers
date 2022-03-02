const SET_CURRENT_LEVEL="SET_CURRENT_LEVEL";
const SET_CURRENT_NUMBER="SET_CURRENT_NUMBER";

export const setCurrentLevel = (level:number) => (
    {type:SET_CURRENT_LEVEL, level}
);

export const setCurrentNumber = (number:number) => (
    {type:SET_CURRENT_NUMBER, number}
);

type ActionTypes = ReturnType<typeof setCurrentLevel>;

let initialState = {
    currentLevel: 0,
    currentNumber: 1
}

const controllerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_LEVEL:
            return {
                ...state,
                currentLevel: action.level                
            }
        case SET_CURRENT_NUMBER:
            return {
                ...state,
                currentNumber: action.number
            }
        default:
             return state;
    }
};

export default controllerReducer;