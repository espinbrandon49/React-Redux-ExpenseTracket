import s from './style.module.css';

export default function ExpenseTotal({ expense, formatter }) {
  return (
    <div className={s.expense}>
      <p>Expense</p>
      <p >{formatter.format(expense)}</p>
    </div>
  )
}
