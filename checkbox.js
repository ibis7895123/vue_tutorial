Vue.component("base-checkbox", {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input
      class="foo bar"
      type="checkbox"
      v-bind:checked='checked'
      v-on:change="$emit('change', $event.target.checked)"
    >
  `,
});

const app = new Vue({
  el: "#checkbox",
  data: {
    check: false,
  },
});
