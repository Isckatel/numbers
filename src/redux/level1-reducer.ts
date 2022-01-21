const SET_VISIBILITY_ITEM="SET_VISIBILITY_ITEM";

export const setVisibilityItem = (id:number) => (
    {type:SET_VISIBILITY_ITEM, id}
);

type ActionTypes = ReturnType<typeof setVisibilityItem>;

let initialState = {
    person: {
        positionX: 525,
        positionY: 225,
        width: 50,
        height: 100
    },
    items: [
        {
            id:0,
            visibility: true, 
            deltaPosition: { x: 0, y: 0 }
        }
    ]
}

const level1Reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_VISIBILITY_ITEM:
            return {
                ...state,
                //переделать
                items: state.items.map((item:any) => {
                    if (item.id==action.id) return {...item, visibility: false}
                })
            }
    }
};

export default level1Reducer;