var recipes = {
  yogurt: "2 scoops",
  granola: "1/4 cup",
  fruit: "1 clementine"
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

function destructivelyDeleteFromObjectByKey(recipes, honey) {
  delete recipes.honey;
  return recipes;
}