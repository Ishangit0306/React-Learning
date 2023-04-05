import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expense(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        item_price={props.item[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        item_price={props.item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        item_price={props.item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        item_price={props.item[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
