import './App.css';
import Balances from './containers/Balances/Balances';
import TransactionInput from './containers/TransactionInput/TransactionInput';
import TransactionList from './containers/TransactionList/TransactionList';

function App() {
  return (
    <div className="App">
      <h1>myExpenseTracker</h1>
      <Balances/>
      <TransactionList />
      <TransactionInput />
    </div>
  );
}

export default App;
