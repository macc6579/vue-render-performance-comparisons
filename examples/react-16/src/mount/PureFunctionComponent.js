import React from 'react'

const ListItem = props => {
  return <li>{props.value}</li>
}

const ListItems = props => {
  return (
    <ul>
      {props.items.map(value => <ListItem key={value} value={value} />)}
    </ul>
  )
}

const List = props => {
  return (
    <div>
      <ListItems {...props}/>
    </div>
  )
}

export default List
