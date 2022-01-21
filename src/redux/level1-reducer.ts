const SET_VISIBILITY_ITEM="SET_VISIBILITY_ITEM";
const SET_DELTA_POSITION = "SET_DELTA_POSITION";

type deltaPositionType = {x:number, y:number};

export const setVisibilityItem = (id:number) => (
    {type:SET_VISIBILITY_ITEM, id}
);
export const setDeltaPosition = (id:number, deltaPosition:deltaPositionType) => (
    {type:SET_DELTA_POSITION, id, deltaPosition}
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

const level1Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_VISIBILITY_ITEM:
            return {
                ...state,
                //переделать
                items: state.items.map((item:any) => {
                    if (item.id==action.id) {return {...item, visibility: false}} 
                    else {return {...item}}
                })
            }
        case SET_DELTA_POSITION:
            return {
                ...state,
                items: state.items.map((item:any) => {
                    if (item.id==action.id) {
                        return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}}
                    } else {
                        return {...item}
                    }
                })
            }
        default:
            return state;
    }
};

export default level1Reducer;