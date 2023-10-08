import { useDispatch } from 'react-redux';
import s from './style.module.css'
import { removeTransaction } from '../../store/transaction/transactionSlice';
import { useState } from 'react';

export default function ListItem({ item, id }) {
  const dispatch = useDispatch();
  const [itemId, setitemId] = useState(id)

  function remove(e) {
    e.preventDefault();
    dispatch(removeTransaction(itemId))
  }

  return (
    <div className={s.listitem} >
      <span><button onClick={remove} className={s.delete}>x</button></span>
      <li className={(item.price > 0) ? s.positive : s.negative}>
        <span>{item.name}</span>
        <span>{(item.price > 0) ? "+" + item.price : item.price}</span>
      </li>
    </div>
  )
}
