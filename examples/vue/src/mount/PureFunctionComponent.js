const ListItem = {
  functional: true,
  render (h, { props }) {
    return <li>{props.value}</li>
  }
}

const ListItems = {
  functional: true,
  render (h, { props }) {
    return (
      <ul>
        {props.items.map((value, key) =>
          <ListItem value={value} key={key} />
        )}
      </ul>
    )
  }
}

const List = {
  functional: true,
  render (h, { data }) {
    return <div><ListItems {...data}/></div>
  }
}

export default List
