import s from './style.module.css'

export default function ListItem({ item }) {
  return (
    <div className={s.listitem} >
      <span><button className={s.delete}>x</button></span>
      <li >
        <span>{item.name}</span>
        <span>{(item.price > 0) ? "+" + item.price : item.price}</span>
      </li>
    </div>
  )
}
