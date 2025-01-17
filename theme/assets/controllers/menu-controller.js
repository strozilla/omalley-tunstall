

export default class extends Controller {
  static targets = ["button", "menu"];
  connect() {
    console.log("here");
  }

  toggle() {
    this.buttonTarget.classList.toggle("open");
    this.menuTarget.classList.toggle("open");
  }

  openList(list, addedHeight = 0) {
    const height = list.scrollHeight;
    const parent = list.parentElement.closest(".children");
    if (parent) this.openList(parent, addedHeight + height);
    list.style.maxHeight = `${addedHeight + height}px`;
  }

  toggleChildren(e) {
    const button = e.currentTarget;
    const list = button.closest("ul");
    const children = list.querySelector(".children");
    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      button.innerHTML = "&minus;";
      this.openList(children);
    } else {
      button.innerHTML = "&plus;";
      children.style.maxHeight = null;
    }
  }
}
