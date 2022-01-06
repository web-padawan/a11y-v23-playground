import { color, typography } from "@vaadin/vaadin-lumo-styles";

// Global color and typography styles
const style = document.createElement("style");
style.innerHTML = `${color.toString()} ${typography.toString()}`;
document.head.appendChild(style);

requestAnimationFrame(() => {
  document.body.removeAttribute("unresolved");
});
