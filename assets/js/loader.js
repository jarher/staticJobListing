export class Loader {
  run(data, node) {
    data.forEach((object) => {
        new node(object).setContent({
          parent: document.querySelector(".list-content"),
          createNewNode:true
        });
    });
  }
}