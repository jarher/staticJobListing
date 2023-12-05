export class Template {
  static mainContent(data) {
    const divs = [
      this.logo,
      this.badges,
      this.position,
      this.itemStates,
      this.itemTags,
    ];
    return `${divs.map((func) => func(data)).join("")}`.replaceAll(",", "");
  }

  static logo({ logo, company }) {
    return `
        <div class="item-logo">
          <img src="${logo}" alt="${company}">
        </div>
        `;
  }

  static badges(data) {
    return `
    <div class="middle">
        <div class="item-badges">
          <span class="item-badge-name">${data.company}</span>
          ${data.new ? '<span class="item-badge-new">New!</span>' : ""}
          ${
            data.featured
              ? '<span class="item-badge-featured">Featured</span>'
              : ""
          }
        </div>
    `;
  }

  static position({ position }) {
    return `<div class="item-position">
          ${position}
        </div>`;
  }

  static itemStates({ postedAt, contract, location }) {
    return `
    <div class="item-states">
          <span class="item-postedAt">${postedAt}</span>
          <div class="item-time-service">
            <span class="item-state-separator"></span>
            <span class="item-time-contract">${contract}</span>
          </div>
          <div class="item-ubication">
            <span class="item-state-separator"></span>
            <span class="item-location">${location}</span>
          </div>
          </div>
        </div>
    `;
  }

  static itemTags({ role, level, languages, tools }) {
    return `
    <hr>
    <div class="item-tags">
        ${role ? `<span class="item-tag">${role}</span>` : ""}
        ${level ? `<span class="item-tag">${level}</span>` : ""}
        ${
          languages.length > 0
            ? languages.map(
                (language) => `<span class="item-tag">${language}</span>`
              )
            : ""
        }
        ${
          tools.length > 0
            ? tools
                .map((tool) => `<span class="item-tag">${tool}</span>`)
                .join("")
            : ""
        }
        </div>
    `;
  }

  static filterLeft(content) {
    return `
    <div class="left">
      ${content.map(
        (tagName) =>
          `<div class="item-filter">
          <span>
          ${tagName}
          </span>
          <div class="item-remove-btn">
            <img src="./images/icon-remove.svg" alt="icon remove">
          </div>
          </div>`
      )}
    </div>
    `.replaceAll(",", "");
  }
  static filterRight() {
    return `<div class="right">
          <div class="item-clear">Clear</div>
        </div>`;
  }
}
