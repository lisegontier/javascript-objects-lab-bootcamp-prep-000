var recipes = {
  yogurt: "2 scoops",
  granola: "1/4 cup",
  fruit: "1 clementine"
};

function updateObjectWithKeyAndValue(recipes, honey, drizzle) {
  Object.assign({}, {honey: "drizzle"});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, honey, drizzle) {
  recipes[honey] = "drizzle";
  return recipes;
}

function deleteFromObjectByKey(recipes, honey) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.honey;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, honey) {
  delete recipes.honey;
  return recipes;
}