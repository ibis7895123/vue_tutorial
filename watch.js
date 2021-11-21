Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li>{{ todo.text }}</li>
  `
})

const app7 = new Vue({
  el: '#app-7',
  data: {
    message: 'Hello'
  },
  watch: {
    message: function(val) {
      const span = document.querySelector('#app-7 span');
      span.innerHTML = val + 'xxx'
      span.style.color = 'red'
    }
  }
})