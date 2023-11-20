import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";

const App=()=> {
  const expense=[
    {
      id:"e1",
      title:"Car Insurance",
      amount:4000,
      date:new Date(2021,4,23),
      locationOfExpenditure:"idukki"
    },
     {
      id:"e2",
      title:"Laptop",
      amount:400,
      date:new Date(2023,6,23),
      locationOfExpenditure:"Eranakulam"
    },
    {
      id:"e3",
      title:"Bike Insurance",
      amount:3850,
      date:new Date(2012,9,23),
      locationOfExpenditure:"Palakkad"
    },
    {
      id:"e4",
      title:"Car Insurance",
      amount:4000,
      date:new Date(2008,0,21),
      locationOfExpenditure:"Kollam"
    },
  ];

  const data=expense.map((value)=>{
   return <ExpenseItem  key={value.id} id={value.id} title={value.title} amount={value.amount} date={value.date} loc={value.locationOfExpenditure}/>
  });
  return (
    <card >
      <h2>Let's get started!</h2>
      {data}
    </card>
  );
}

export default App;
