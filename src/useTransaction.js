//Custom Hook;

import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories,expenseCategories,resetCategories } from "./constants/category";

const useTransaction=(title)=>{
    resetCategories();
    const {transactions}=useContext(ExpenseTrackerContext);
    const selectedTransaction=transactions.filter((t)=>t.type===title);
    const total=selectedTransaction.reduce((acc,curVal)=>acc+=curVal.amount,0 );
    const categories=title==="Income"?incomeCategories:expenseCategories;
    
    
    selectedTransaction.forEach((t)=>{
        const category=categories.find((c)=>c.type===t.category);
        if(category){
            category.amount+=t.amount;
        }
    });

    const filteredCategories=categories.filter((c)=>c.amount>0);
    // console.log(filteredCategories.length);
    const chartData={
        datasets:[{
            data:filteredCategories.map((c)=>c.amount),
            backgroundColor:filteredCategories.map((c)=>c.color)
        }],
        labels:filteredCategories.map((c)=>c.type)
    }
    return {total,chartData};


}
export default useTransaction;

