import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';
const initialState=[];

export const ExpenseTrackerContext=createContext(initialState);


export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    //Action
    const deleteTransaction=(id)=>{
        dispatch({type:'Delete_Transaction',payload:id});
    }
    const addTransaction=(transaction)=>{
        dispatch({type:'Add_Transaction',payload:transaction});
    }
    const balance=transactions.reduce((acc,curVal)=>{
      return(curVal.type==='Expense'?acc-curVal.amount:acc+curVal.amount)
    },0);
    
  return (
    <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}}>
        {children}
    </ExpenseTrackerContext.Provider>
  )
}
