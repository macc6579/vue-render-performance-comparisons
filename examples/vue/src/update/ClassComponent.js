import Vue from 'vue'

Vue.component('update-class-component-list-item', {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  // mounted () {
  //   console.log('mounted')
  // },
  // updated () {
  //   console.log('updated')
  // },
  render (h) {
    return <li>{this.value}</li>
  }
})

Vue.component('update-class-component-list-items', {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  // mounted () {
  //   console.log('mounted')
  // },
  // updated () {
  //   console.log('updated')
  // },
  // template: '<ul><update-list-item v-for="value in items" :value="value" :key="value" /></ul>'
  render (h) {
    return (
      <ul>
        {this.items.map((value) =>
          <update-class-component-list-item value={value} key={value} />
        )}
      </ul>
    )
  }
})

Vue.component('update-class-component-list', {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render (h) {
    return <div><update-class-component-list-items items={this.items} /></div>
  }
})
