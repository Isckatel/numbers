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
export const setVisibilityItem = (id:number, idNumber:number) => (
    {type:SET_VISIBILITY_ITEM, id, idNumber}
);
export const setDeltaPosition = (id:number, deltaPosition:deltaPositionType, idNumber:number) => (
    {type:SET_DELTA_POSITION, id, deltaPosition, idNumber}
);
export const setDeltaPositionAndVisibility = (id:number, deltaPosition:deltaPositionType, idNumber:number) => (
    {type:SET_DELTA_POSITION_AND_VISIBILITY, id, deltaPosition, idNumber}
);


type ActionTypes = ReturnType<typeof setVisibilityItem>;

let initialState = {
    numbers: [
        {
        id:1,
        person: {
            position: {x:400, y:300}, 
            width: 125,
            height: 200,
            urlImg: ''
        },
        items: [
            {
                id:0,
                visibility: true, 
                deltaPosition: { x: 0, y: 0 },
                width: 64,
                height: 82,
                urlImg: ''
            }
        ]
        },
        {
            id:2,
            person: {
                position: {x:400, y:300}, 
                width: 125,
                height: 200,
                urlImg: ''
            },
            items: [
                {
                    id:0,
                    visibility: true, 
                    deltaPosition: { x: 0, y: 0 },
                    width: 64,
                    height: 82,
                    urlImg: ''
                    
                },
                {
                    id:1,
                    visibility: true, 
                    deltaPosition: { x: 0, y: 0 },
                    height: 82,
                    width: 64,
                    urlImg: ''
                }
    
            ]
        },
        {
            id:3,
            person: {
                position: {x:400, y:300}, 
                width: 125,
                height: 200,
                urlImg: ''
            },
            items: [
                {
                    id:0,
                    visibility: true, 
                    deltaPosition: { x: 0, y: 0 },
                    width: 64,
                    height: 82,
                    urlImg: ''
                    
                },
                {
                    id:1,
                    visibility: true, 
                    deltaPosition: { x: 0, y: 0 },
                    height: 82,
                    width: 64,
                    urlImg: ''
                },
                {
                    id:2,
                    visibility: true, 
                    deltaPosition: { x: 0, y: 0 },
                    height: 82,
                    width: 64,
                    urlImg: ''
                }
    
            ]
        }        
    ]
}

const level1Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case SET_VISIBILITY_ITEM:
        //     return {
        //         ...state,
        //         //переделать
        //         items: state.numbers[action.idNumber-1].items.map((item:any) => {
        //             if (item.id==action.id) {return {...item, visibility: false}} 
        //             else {return {...item}}
        //         })
        //     }
        // case SET_DELTA_POSITION:
        //     return {
        //         ...state,
        //         items: state.numbers[action.idNumber-1].items.map((item:any) => {
        //             if (item.id==action.id) {
        //                 return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}}
        //             } else {
        //                 return {...item}
        //             }
        //         })
        //     }
        case SET_DELTA_POSITION_AND_VISIBILITY:
            return {
                ...state,
                numbers:[...state.numbers.map((n:any)=> {
                    if (n.id == action.idNumber) {
                        return {
                            ...n,
                            items: state.numbers[action.idNumber-1].items.map((item:any) => {
                                if (item.id==action.id) {
                                    if (collision(item,state.numbers[action.idNumber-1].person)) {
                                        return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}, visibility: false}
                                    } else {
                                        return {...item, deltaPosition:{x:action.deltaPosition.x, y:action.deltaPosition.y}}
                                    }    
                                } else {
                                    return {...item}
                                }
                            })
                        }
                    } else {
                        return {...n}
                    }
                })               
                ]
            }    
        default:
            return state;
    }
};

export default level1Reducer;