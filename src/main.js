import Vue from 'vue'
import App from './App.vue'

// create global filter
Vue.filter('snippet', value => { // snippet being post.title
  if(!value || typeof(value) != 'string') return ''
  // we need a val - 1st tests whether there is any value at all
  // we need a str - 2nd tests whether it is a string value
  // if either of these unwanted cases, return empty str + break
  // otherwise... // slice out the first X chars and add a ...
  if (value[300] === ' ') {
    value = `${value.slice(0,299)}...`
  } else {
    value = `${value.slice(0,300)}...`
  } // prob not the most efficient way to do this
  return value // and pass them back
  // some are shorter because they're shorter than 20 chars.
})

new Vue({
  el: '#app',
  render: h => h(App)
})
