const app = new Vue({
  el: "#v-if",
  data: {
    loginType: "username",
  },
  methods: {
    toggleLoginType: function () {
      return (this.loginType =
        this.loginType === "username" ? "email" : "username");
    },
  },
});
