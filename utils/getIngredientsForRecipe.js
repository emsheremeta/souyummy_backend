const getIngredientsList = require("../utils/getIngredientsList");

const getRecipeIngredients = async (recipeIngredients, token) => {
  const allIngredientList = await getIngredientsList(token);

  return recipeIngredients.reduce((acc, currentIngredient, index) => {
    const data = allIngredientList.filter((ingredient) => ingredient._id === currentIngredient.id.valueOf());
    return [...acc, ...data];
  }, []);
};

module.exports = getRecipeIngredients;
