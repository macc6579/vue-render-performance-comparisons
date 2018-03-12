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
      <ListItems items={props.items}/>
    </div>
  )
}

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  componentDidMount() {
    this.props.onMounted((items) => {
      this.setState({ items })
    })
  }

  componentDidUpdate() {
    this.props.onUpdated((items) => {
      this.setState({ items })
    })
  }

  render() {
    return <List items={this.state.items}/>;
  }
}
