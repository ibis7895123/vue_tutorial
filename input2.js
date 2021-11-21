const app = new Vue({
  el: "#input2",
  data: {
    message: "",
    multilineMessage: "",
    checked: false,
    checkedNames: [],
    picked: "",
    selected: "",
    selected2: "A",
    options: [
      { text: "One", value: "A" },
      { text: "Two", value: "B" },
      { text: "Three", value: "C" },
    ],
    age: 5,
  },
});
