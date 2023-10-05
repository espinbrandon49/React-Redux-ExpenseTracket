import './App.css';
import Balances from './components/Balances/Balances';
import TransactionInput from './components/TransactionInput/TransactionInput';
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
