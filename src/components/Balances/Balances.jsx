import { useSelector } from 'react-redux';
import Balance from '../Balance/Balance'
import ExpenseTotal from '../ExpenseTotal/ExpenseTotal'
import IncomeTotal from '../IncomeTotal/IncomeTotal'
import s from './style.module.css'

export default function Balances() {
  const transactionList = useSelector((store) => store.TRANSACTION.transactionList);

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });

  const balance = transactionList.reduce((acc, transaction) => {
    return Number.parseFloat(acc) + Number.parseFloat(transaction.price)
  }, 0);

  const income = transactionList
    .filter((transaction) => transaction.price > 0)
    .reduce((acc, trans) => {
      return Number.parseFloat(acc) + Number.parseFloat(trans.price)
    }, 0)

  const expense = transactionList
    .filter((transaction) => transaction.price < 0)
    .reduce((acc, trans) => {
      return Number.parseFloat(acc) + Number.parseFloat(trans.price)
    }, 0)

  return (
    <section className="balance">
      <Balance balance={balance} formatter={formatter}/>
      <div className={s.balances}>
        <IncomeTotal income={income} formatter={formatter} />
        <ExpenseTotal expense={expense} formatter={formatter} />
      </div>
    </section>
  )
}
