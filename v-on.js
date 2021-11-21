const app = new Vue({
  el: "#v-on",
  data: {
    counter: 0,
    name: "Vue.js",
  },
  methods: {
    greet: function (event) {
      alert("Hello " + this.name + "!");

      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function (message) {
      alert(message);
    },
    warn: function (message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    submit: function (event) {
      alert(event.target.value);
    },
  },
});
