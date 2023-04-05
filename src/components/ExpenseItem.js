import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';
function ExpenseItem(props) {
   const [title,setTitle]=useState(props.title);
  const clickhandler=()=>{
   setTitle('UPDATED');
}
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.item_price}</div>
      </div>
        <button onClick={clickhandler}>Click here</button>
    </Card>
  );
}
export default ExpenseItem;


