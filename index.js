var recipes = {
  prop: 1,
  prop2: 2
};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  recipes = Object.assign({}, recipes);
  return delete recipes.value;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  return delete recipes.value;
}