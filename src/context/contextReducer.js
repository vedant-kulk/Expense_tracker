//Reducer is a function that takes a in a old state and an action  => new state
const contextReducer=(state,action)=>{
    let transactions;
    if(action.type==='Delete_Transaction'){
        transactions=state.filter((t)=>action.payload !== t.id);
        return transactions;
    }
    else if(action.type==='Add_Transaction'){
        transactions=[action.payload,...state];
        return transactions;
    }
    return state;
}
export default contextReducer;