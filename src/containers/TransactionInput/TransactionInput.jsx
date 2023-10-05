import { useDispatch } from 'react-redux'
import s from './style.module.css'
import { useState } from 'react';
import { addTransactionAction } from '../../store/transaction/transactionSlice';

export default function TransactionInput() {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [transactionName, setTransactionName] = useState('');

  function submit(e) {
    e.preventDefault();
    dispatch(addTransactionAction({name: transactionName, price: price}));
    setPrice("");
    setTransactionName("");
  }

  return (
    <section className={s.transaction}>
      <h4>Add new transaction</h4>
      <form onSubmit={submit}>
        <div className={s.inputgroup}>
          <label name="text">Text</label>
          <input
            type="text"
            className={s.text}
            placeholder="Enter text..."
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>
        <div className={s.inputgroup}>
          <label name="amount">Amount</label>
          <input
            type="number"
            step="0.01"
            className={s.text}
            placeholder="Enter amount..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </section>
  )
}
