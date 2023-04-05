import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });
  const titleChange = (event) => {
    //setUserInput({
       // ...userInput,
      //  enteredTitle:event.target.value});
    //   setUserInput((prevstate)=>{
    //     return{
    //         ...prevstate,enteredTitle:event.target.value
    //     };
    //   });
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
   // setUserInput({
        //...userInput,
       ///enteredAmount:event.target.value});
    //    setUserInput((prevstate)=>{
    //     return{
    //         ...prevstate,enteredAmount:event.target.value
    //     };
    //    });
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    //setUserInput({
        //...userInput,
        //enteredDate:event.target.value});

        // setUserInput((prevstate)=>{
        //     return{
        //         ...prevstate,enteredDate:event.target.value
        //     };
        //    });
        setEnteredDate(event.target.value);
  };
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
    
   
};
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChange} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChange} />
        </div>
      </div>
      <div className="new-expense__controls">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
