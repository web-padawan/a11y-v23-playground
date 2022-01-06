customElements.define(
  "mode-toggle",
  class extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host {
            display: block;
            position: fixed;
            right: 0.5rem;
            top: 0.5rem;
            z-index: 1;
            padding: 0.5rem;
            border: solid 1px #ccc;
          }
        </style>
        <label>
          <input type="checkbox" id="dark" />
          Dark mode
        </label>
      `;

      const checkbox = root.getElementById("dark");
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          document.documentElement.setAttribute("theme", "dark");
        } else {
          document.documentElement.removeAttribute("theme");
        }
      });
    }
  }
);
