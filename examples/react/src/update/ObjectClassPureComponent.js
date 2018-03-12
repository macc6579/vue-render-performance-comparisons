import React from 'react'
import lodash from 'lodash'

class ListItem extends React.PureComponent {
  // componentDidMount() {
  //   console.log('onMounted')
  // }

  // componentDidUpdate() {
  //   console.log('onUpdated')
  // }

  render() {
    return <li>{this.props.value}</li>
  }
}

class ListItems extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(value => <ListItem key={value} value={value} />)}
      </ul>
    )
  }
}

class List extends React.PureComponent {
  render() {
    return (
      <div>
        <ListItems items={this.props.items}/>
      </div>
    );
  }
}

export default class ClassComponent extends React.PureComponent {
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
    return <List items={lodash.range(Object.values(this.state.items).length)}/>;
  }
}