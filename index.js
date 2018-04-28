var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, {key: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, value) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.value;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, value) {
  delete recipes.value;
  return recipes;
}