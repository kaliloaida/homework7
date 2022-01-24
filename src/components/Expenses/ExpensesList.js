 import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
 
  let expensesContent =  <p style={{ textAlign: "center", color: "white" }}> No Expenses Found</p>;
  if(props.expenses.length > 0){
    expensesContent = props.expenses.map((element)=>{
      return(
        <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
        />
      )
    })
  };

  

  if(props.expenseYear === 'All'){
    expensesContent = props.expenseItems.map((element) => {
      return(
        <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
        />
      )
    })
  };
  return (
    <ul className="expenses-list">
      {expensesContent}
     
  
      
    </ul>
  );
};

export default ExpensesList;

 