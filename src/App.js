import ExpenseItem from "./Components/ExpenseItem";
function App() {
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
      title:"what ever",
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
   return <ExpenseItem title={value.title} amount={value.amount} date={value.date} loc={value.locationOfExpenditure}/>
  });
  return (
    <div>
      <h2>Let's get started!</h2>
      {data}
    </div>
  );
}

export default App;
