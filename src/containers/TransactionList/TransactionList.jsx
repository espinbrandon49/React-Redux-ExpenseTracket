import List from '../../components/List/List';
import { useSelector } from 'react-redux';

export default function TransactionList() {
  const transactionList = useSelector((store) => store.TRANSACTION.transactionList);

  return (
    <List items={transactionList} />
  )
}
