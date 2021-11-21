Vue.component("base-layout", {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>

      <main>
        <slot name="main"></slot>
      </main>

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
});

const app = new Vue({
  el: "#slot",
});
