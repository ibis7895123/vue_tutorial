Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li>{{ todo.text }}</li>
  `
})

const app = new Vue({
  el: '#app',
  data: {
    firstName: 'John',
    lastName: 'Adam',
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue) {
        let names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})