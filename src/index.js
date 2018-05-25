import 'babel-polyfill'
import 'whatwg-fetch'

import './index.css'

import Vue from 'vue'
import app from './app/app.vue'

var vm = new Vue({
  el: '#app',
  render: h => h(app)
})
