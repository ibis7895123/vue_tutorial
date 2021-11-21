const app = new Vue({
  el: "#v-for",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10",
    },
    numbers: [1, 2, 3, 4, 5],
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ],
  },
  methods: {
    toggleLoginType: function () {
      return (this.loginType =
        this.loginType === "username" ? "email" : "username");
    },
    evenNumbers2: function (numbers) {
      return numbers.filter((number) => {
        return number % 2 === 0;
      });
    },
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter((number) => {
        return number % 2 === 0;
      });
    },
  },
});
