import Vue from 'vue'

Vue.component('mount-class-component-list-item', {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  render (h) {
    return <li>{this.value}</li>
  }
})

Vue.component('mount-class-component-list-items', {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render (h) {
    return (
      <ul>
        {this.items.map((value, key) =>
          <mount-class-component-list-item value={value} key={key} />
        )}
      </ul>
    )
  }
})

Vue.component('mount-class-component-list', {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render (h) {
    return <div><mount-class-component-list-items items={this.items} /></div>
  }
})
