import { color, typography } from "@vaadin/vaadin-lumo-styles";

// Global color and typography styles
const style = document.createElement("style");
style.innerHTML = `${color.toString()} ${typography.toString()}`;
document.head.appendChild(style);

const now = new Date().getTime();
localStorage.setItem("vaadin.licenses.vaadin-confirm-dialog.lastCheck", now);
localStorage.setItem("vaadin.licenses.vaadin-crud.lastCheck", now);

requestAnimationFrame(() => {
  document.body.removeAttribute("unresolved");
});
