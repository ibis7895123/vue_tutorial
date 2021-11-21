Vue.component("tab-home", {
  template: `
    <div>Home Component</div>
  `,
});
Vue.component("tab-posts", {
  template: `
    <div>Posts Component</div>
  `,
});
Vue.component("tab-archive", {
  template: `
    <div>Archive Component</div>
  `,
});

const app = new Vue({
  el: "#dynamic-component",
  data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"],
  },
  computed: {
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
});
