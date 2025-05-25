function findSeventhSonsOfSeventhSons(json) {
  json = JSON.parse(json);
  const result = new Set();

  const findSeventhSons = (person, parentIsSeventhSon = false) => {
    if (!person.children || person.children.length === 0) return;

    let count = 0;
    for (let child of person.children) {
      if (child.gender === 'male') {
        count++;
        if (count === 7) {
          if (parentIsSeventhSon) {
            result.add(child.name);
          }
          // Recurse with this child marked as a seventh son
          findSeventhSons(child, true);
        } else {
          // Recurse on other children as well, but they're not 7th sons
          findSeventhSons(child, false);
        }
      } else {
        return;
      }
    }
  };

  findSeventhSons(json);
  return result;
}
