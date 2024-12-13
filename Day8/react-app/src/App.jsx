import "./App.css"

const App = ({a1,a2,a3}) => {
  return (
    <div id='disp'>
      <h1>Student Details</h1>
      <h2>Name : {a1}</h2>
      <h2>Email : {a2}</h2>
      <h2>Mobile no.: {a3}</h2>
    </div>
  )
}

export default App