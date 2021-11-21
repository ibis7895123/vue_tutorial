Vue.component("blog-post", {
  props: {
    post: {
      id: Number,
      title: String,
      content: String,
      author: {
        name: String,
      },
    },
    index: Number,
    count: {
      type: Number,
      default: 0,
    },
    count2: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      counter: this.count,
    };
  },
  computed: {
    textCount: function () {
      return `${this.counter} count`;
    },
  },
  template: `
    <div>
      <h3>index: {{ index }}</h3>
      <h3>
        {{ post.title + ' by ' + post.author.name }}
      </h3>
      <button v-on:click="counter++">
        {{ textCount }}
      </button>
      <button v-on:click="count2++">
        {{ count2 }}
      </button>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('enlarge-text1', 0.1)">
        Enlarge text 1
      </button>
      <button v-on:click="$emit('enlarge-text2', 0.1)">
        Enlarge text 2
      </button>
      <div v-html='post.content'></div>
    </div>
  `,
});

const app = new Vue({
  el: "#component",
  data: {
    posts: [
      {
        id: 1,
        title: "My journey with Vue",
        content: '<p style="color: red">Hello</p>',
        author: {
          name: "John",
        },
      },
      {
        id: "test",
        title: "My journey with Vue arease",
        content: '<p style="color: red">Hello 2</p>',
        author: {
          name: "Johnaesras",
        },
      },
    ],
    postFontSize: 1,
    count2: 0,
  },
  methods: {
    onEnlargeText: function (amount) {
      this.postFontSize += amount;
    },
  },
});
