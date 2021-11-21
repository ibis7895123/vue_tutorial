Vue.component('custom-input', {
  props: {
    value: String,
  },
  computed: {
    inputListeners: function() {
      let vm = this

      return Object.assign(
        {},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          },
          focus: function (event) {
            console.log("Focus!!!", event)
          },
        },
      )
    },
  },
  template: `
    <input
      v-bind="$attrs"
      v-bind:value='value'
      v-on='inputListeners'
    >
  `
})

const app = new Vue({
  el: '#input',
  data: {
    searchText: "",
  },
})