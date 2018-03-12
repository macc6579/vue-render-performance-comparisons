import React from 'react'
import ReactDOM from 'react-dom'
import { parse } from 'query-string'
import ObjectClassComponent from './mount/ObjectClassComponent'
import MountPureFunctionComponent from './mount/PureFunctionComponent'
import MountClassComponent from './mount/ClassComponent'
import UpdatePureFunctionComponent from './update/PureFunctionComponent'
import UpdateClassComponent from './update/ClassComponent'
import UpdateClassPureComponent from './update/ClassPureComponent'
import ObjectClassPureComponent from './update/ObjectClassPureComponent'
import ObjectClassShouldPureComponent from './update/ObjectClassShouldPureComponent'
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
    ReactDOM.render(
      <ObjectClassComponent items={items}/>,
      document.getElementById('root')
    )
    done()
  }, object)
} else if (type === 'm' && component === 'pfc') {
  mount((items, done) => {
    ReactDOM.render(
      <MountPureFunctionComponent items={items}/>,
      document.getElementById('root')
    )
    done()
  })
} else if (type === 'm' && component === 'cc') {
  mount((items, done) => {
    ReactDOM.render(
      <MountClassComponent items={items}/>,
      document.getElementById('root')
    )
    done()
  })
} else if (type === 'u' && object > 0) {
  if (component === 'ocpc') {
    update((items, onMounted, onUpdated) => {
      ReactDOM.render(
        <ObjectClassPureComponent items={items} onMounted={onMounted} onUpdated={onUpdated} />,
        document.getElementById('root')
      )
    }, mutable, random, object)
  } else if (component === 'ocspc') {
    update((items, onMounted, onUpdated) => {
      ReactDOM.render(
        <ObjectClassShouldPureComponent items={items} onMounted={onMounted} onUpdated={onUpdated} />,
        document.getElementById('root')
      )
    }, mutable, random, object)
  }
} else if (type === 'u' && component === 'pfc') {
  update((items, onMounted, onUpdated) => {
    ReactDOM.render(
      <UpdatePureFunctionComponent items={items} onMounted={onMounted} onUpdated={onUpdated} />,
      document.getElementById('root')
    )
  }, mutable, random)
} else if (type === 'u' && component === 'cc') {
  update((items, onMounted, onUpdated) => {
    ReactDOM.render(
      <UpdateClassComponent items={items} onMounted={onMounted} onUpdated={onUpdated} />,
      document.getElementById('root')
    )
  }, mutable, random)
} else if (type === 'u' && component === 'cpc') {
  update((items, onMounted, onUpdated) => {
    ReactDOM.render(
      <UpdateClassPureComponent items={items} onMounted={onMounted} onUpdated={onUpdated} />,
      document.getElementById('root')
    )
  }, mutable, random)
}