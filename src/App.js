import './App.css';
import Footer from './components/Footer/Footer';
import Balances from './containers/Balances/Balances';
import TransactionInput from './containers/TransactionInput/TransactionInput';
import TransactionList from './containers/TransactionList/TransactionList';

function App() {
  return (
    <div className="App">
      <h4>REACT/REDUX</h4>
      <h1>myExpenseTracker</h1>
      <Balances/>
      <TransactionList />
      <TransactionInput />
      <Footer />
    </div>
  );
}

export default App;
