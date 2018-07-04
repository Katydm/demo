
const ADD='ADD';
const REDUCE='REDUCE';

export function counterReducer(state=10,action){
    switch (action.type){
        case ADD:
            return state+1;
        case REDUCE:
            return state-1;
        default:
            return state;
    }
}
export default counterReducer;
//
//action creator
export function add() {
    return {type:ADD}
}
export function reduce() {
    return {type:REDUCE}
}
//异步函数
export function addAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}