Vue.component("todo-list", {
  props: {
    todos: Array,
  },
  template: `
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <slot name="todo" v-bind:todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  `,
});

const app = new Vue({
  el: "#slot",
  data: {
    todos: [
      {
        id: 1,
        text: "Todo1",
        isComplete: true,
      },
      {
        id: 2,
        text: "Todo2",
        isComplete: false,
      },
      {
        id: 3,
        text: "Todo3",
        isComplete: false,
      },
    ],
  },
});
