import ListItem from '../../containers/ListItem/ListItem';

export default function List({ items }) {
  return (
    <section className="history">
      <h4>History</h4>
      <ul id="historyList">
        {
          items.map((item, i) => (
            <ListItem key={item + i} item={item} id={i}/>
          ))
        }
      </ul>
    </section>
  )
}
