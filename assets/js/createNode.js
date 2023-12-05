import { Template } from "./template.js";

export class createNode {
  constructor(data) {
    this.data = data;
  }
  setMainContent(parent) {
    const element = document.createElement("div");
    element.className = `${
      this.data.new && this.data.featured ? "item-card item-card-border-left" : "item-card"
    }`;
    element.dataset.index = this.data.id;
    element.innerHTML = Template.mainContent(this.data);
    parent.append(element);
  }
  setFilter({ parent, data }) {
    parent.innerHTML = Template.filterLeft(data).concat(Template.filterRight());
  }
  setContent(data) {
    if (data.createNewNode) {
      this.setMainContent(data.parent);
      return;
    }
    this.setFilter(data);
  }
}
