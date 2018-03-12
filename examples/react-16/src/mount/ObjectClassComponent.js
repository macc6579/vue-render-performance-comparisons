import React from 'react'

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}