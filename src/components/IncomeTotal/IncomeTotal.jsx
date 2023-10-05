import s from './style.module.css'

export default function IncomeTotal({ income, formatter }) {
  return (
    <div className={s.income}>
      <p>Income</p>
      <p>{formatter.format(income)}</p>
    </div>
  )
}
