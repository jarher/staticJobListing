export function FilteredData(data, tags) {
  const c_data = [...data];

  return c_data.filter((el) => {
    if (el.languages.length > 0 || el.tools.length > 0) {
      const skills = [el.role, el.level, ...el.languages, ...el.tools];
      if (tags.every((tag) => skills.includes(tag))) {
        return el;
      }
    }
  });
}
