import "./components/ExpenseItem";

import Expenses from "./components/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        <Expenses />
      </div>
    </div>
  );
}

export default App;
