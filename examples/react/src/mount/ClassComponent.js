import React from 'react'

class ListItem extends React.Component {
  render() {
    return <li>{this.props.value}</li>
  }
}

class ListItems extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(value => <ListItem key={value} value={value} />)}
      </ul>
    )
  }
}

export default class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <ListItems items={this.props.items}/>
      </div>
    );
  }
}