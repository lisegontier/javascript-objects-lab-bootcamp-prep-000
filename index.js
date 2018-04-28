var recipes = {
  prop: 1
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
  delete recipes.value;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  return delete recipes.value;
}