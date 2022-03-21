import React,{useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

  const DUMMY_Expenses = [
    {
      id: "e1",
      title: "Home Insurance",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Life Insurrance",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Travelling Insurrance",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const App=()=>{
    const[expenses,setExpenses]=useState(DUMMY_Expenses);
  
  const addExpenseHandler =expense =>{
    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses];
    })
  
  }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
