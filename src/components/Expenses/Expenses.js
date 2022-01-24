import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //метод который используется  внутри компоненты expensesFilter вызывается как пропс для получения данных
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // THIRD VERSION
 
  /* let expensesContent =  <p style={{ textAlign: "center", color: "white" }}> No Expenses Found</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((element)=>{
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

  

  if(filteredYear === 'All'){
    expensesContent = props.items.map((element) => {
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
  */



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* THIRD VERSIONDI CHAKIRUU */}
       {/* {expensesContent}    */}
      {/* Fourth verion  EXpensesList component'нен чакыруу жолу */}
        <ExpensesList expenses={filteredExpenses} expenseYear={filteredYear} expenseItems={props.items}/>  

      
      {/* Second verion */}

      {/* {filteredExpenses.length === 0 && props.items.length === 0 && (
        <p style={{ textAlign: "center", color: "white" }}>No Expenses Found</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.title}
              date={element.date}
            />
          );
        })}
         
         {filteredYear==="All" && props.items.map((element)=>{
            return (
              <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.title}
                date={element.date}
              />
            );
         }
         )}
 */}


        {/* First verion */}

      {/* {filteredExpenses.length === 0 ? (
        <p style={{textAlign: 'center', color:'white'}} >No Expenses Found</p>
      ) : (
      filteredExpenses.map((element) => {
        return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })
      )}
  */}
    </Card>
  );
};

export default Expenses;
