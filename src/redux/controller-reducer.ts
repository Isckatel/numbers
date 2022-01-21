const SET_CURRENT_LEVEL="SET_CURRENT_LEVEL";

export const setCurrentLevel = (level:number) => (
    {type:SET_CURRENT_LEVEL, level}
);

type ActionTypes = ReturnType<typeof setCurrentLevel>;

let initialState = {
    currentLevel: 0,
    number: 1
}

const controllerReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_CURRENT_LEVEL:
            return {
                ...state,
                currentLevel: action.level                
            }
            default:
                return state;
    }
};

export default controllerReducer;