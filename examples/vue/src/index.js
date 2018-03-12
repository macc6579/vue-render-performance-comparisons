import Vue from 'vue'
import lodash from 'lodash'
import { parse } from 'query-string'
import MountPureFunctionComponent from './mount/PureFunctionComponent'
import UpdatePureFunctionComponent from './update/PureFunctionComponent'
import './mount/ClassComponent'
import './update/ClassComponent'
import { mount, update } from '../../../helpers/benchmark'

const queries = parse(window.location.search)
const type = queries.t || 'm'
const component = queries.c || 'pfc'
const mutable = !!queries.m
const random = !!queries.r
const object = queries.o || 0

/* eslint-disable no-new */
if (type === 'm' && object > 0) {
  mount((items, done) => {
    new Vue({
      el: '#root',
      data () {
        return { items }
      },
      render (h) {
        return (
          <div id='root'>
          </div>
        )
      },
      mounted: done
    })
  }, object)
} else if (type === 'm' && component === 'pfc') {
  mount((items, done) => {
    new Vue({
      el: '#root',
      render (h) {
        return (
          <div id='root'>
            <MountPureFunctionComponent items={items}/>
          </div>
        )
      },
      mounted: done
    })
  })
} else if (type === 'm' && component === 'cc') {
  mount((items, done) => {
    new Vue({
      el: '#root',
      render (h) {
        return (
          <div id='root'>
            <mount-class-component-list items={items}/>
          </div>
        )
      },
      mounted: done
    })
  })
} else if (type === 'u' && object > 0) {
  update((items, onMounted, onUpdated) => {
    new Vue({
      el: '#root',
      data () {
        return { items }
      },
      computed: {
        arrays () {
          return lodash.range(Object.values(this.items).length)
        }
      },
      render (h) {
        return (
          <div id='root'>
            <update-class-component-list items={this.arrays} />
          </div>
        )
      },
      mounted () {
        onMounted((newItems) => {
          this.items = newItems
        })
      },
      updated () {
        onUpdated((newItems) => {
          this.items = newItems
        })
      }
    })
  }, mutable, random, object)
} else if (type === 'u' && component === 'pfc') {
  update((items, onMounted, onUpdated) => {
    new Vue({
      el: '#root',
      data () {
        return { items }
      },
      render (h) {
        return (
          <div id='root'>
            <UpdatePureFunctionComponent items={this.items} />
          </div>
        )
      },
      mounted () {
        onMounted((newItems) => {
          this.items = newItems
        })
      },
      updated () {
        onUpdated((newItems) => {
          this.items = newItems
        })
      }
    })
  }, mutable, random)
} else if (type === 'u' && component === 'cc') {
  update((items, onMounted, onUpdated) => {
    new Vue({
      el: '#root',
      data () {
        return { items }
      },
      render (h) {
        return (
          <div id='root'>
            <update-class-component-list items={this.items} />
          </div>
        )
      },
      mounted () {
        onMounted((newItems) => {
          this.items = newItems
        })
      },
      updated () {
        onUpdated((newItems) => {
          this.items = newItems
        })
      }
    })
  }, mutable, random)
}
