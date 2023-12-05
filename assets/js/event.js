import { FilteredData } from "./filterData.js";

export class Event {
  click(data, createNode) {
    const filterContainer = document.querySelector(".filter-container");
    
    const listContent = document.querySelector(".list-content");

    const parameters = {
      arrayData: null,
      contentParameters: {
        parent: filterContainer,
        createNewNode: false,
      },
      isIterate: false,
    };
    
    let tags = [];

    function clearFilter() {
      filterContainer.innerHTML = "";
      filterContainer.classList.remove("background-filter");
    }

    function modifyListParameters(arrayData){
      const listParameters = {...parameters};
      listParameters.arrayData = arrayData;
      listParameters.contentParameters = {
        parent: listContent,
        createNewNode: true,
      };
      listParameters.isIterate = true;
      return listParameters;
    }

    function renderContent({ arrayData, contentParameters, isIterate }) {
      if (isIterate) {
        if (contentParameters.parent.className === "list-content") {
          contentParameters.parent.innerHTML = "";
        }
        arrayData.forEach((data) =>
          new createNode(data).setContent(contentParameters)
        );
        return;
      }
      new createNode().setContent(contentParameters);
    }

    document.addEventListener("click", (e) => {
      if (e.target.className === "item-tag") {
        if (!tags.includes(e.target.textContent)) {
          tags.push(e.target.textContent);
        }

        filterContainer.classList.add("background-filter");

        const filterParameters = { ...parameters };
        filterParameters.contentParameters.data = tags;
        const listParameters = modifyListParameters(FilteredData(data, tags));

        const elementsToRender = [filterParameters, listParameters];
        elementsToRender.forEach((element) => renderContent(element));
      }

      if (e.target.parentElement.className === "item-remove-btn") {
        const tagIndex = tags.indexOf(
          e.target.parentElement.previousElementSibling.textContent.trim()
        );

        tags.splice(tagIndex, 1);

        if (tags.length === 0) {
          clearFilter();
          renderContent(modifyListParameters(data));
          return;
        }
        
        renderContent(modifyListParameters(FilteredData(data, tags)));

        e.target.parentElement.parentElement.remove();
      }

      if (e.target.className === "item-clear") {
        tags = [];
        clearFilter();
        renderContent(modifyListParameters(data));
      }
    });
  }
}
