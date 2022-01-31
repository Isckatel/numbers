import collision from "../assets/functions/collision";

const SET_VISIBILITY_ITEM="SET_VISIBILITY_ITEM";
const SET_DELTA_POSITION = "SET_DELTA_POSITION";
const SET_DELTA_POSITION_AND_VISIBILITY = "SET_DELTA_POSITION_AND_VISIBILITY";

 type deltaPositionType = {x:number, y:number};
 export type itemType = {
    id:number,
    visibility: boolean,
    deltaPosition: deltaPositionType,
    width: number,
    height: number   
}

export type personType = {
    position: deltaPositionType,
    width: number,
    height: number   
}

//export type StateType = ReturnType<typeof store.getState>;
export const setVisibilityItem = (id:number) => (
    {type:SET_VISIBILITY_ITEM, id}
);
export const setDeltaPosition = (id:number, deltaPosition:deltaPositionType) => (
    {type:SET_DELTA_POSITION, id, deltaPosition}
);
export const setDeltaPositionAndVisibility = (id:number, deltaPosition:deltaPositionType) => (
    {type:SET_DELTA_POSITION_AND_VISIBILITY, id, deltaPosition}
);


type ActionTypes = ReturnType<typeof setVisibilityItem>;

let initialState = {
    person: {
        position: {x:525, y:225}, 
        width: 50,
        height: 100
    },
    items: [
        {
            id:0,
            visibility: true, 
            deltaPosition: { x: 0, y: 0 },
            width: 64,
            height: 82,
            
        },
        {
            id:1,
            visibility: true, 
            deltaPosition: { x: 0, y: 0 },
            height: 82,
            width: 64,
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
        case SET_DELTA_POSITION_AND_VISIBILITY:
            return {
                ...state,
                items: state.items.map((item:any) => {
                    if (item.id==action.id) {
                        if (collision(item,state.person)) {
                            return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}, visibility: false}
                        } else {
                            return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}}
                        }    
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