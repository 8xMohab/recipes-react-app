import Ingredients from "./Ingredients";
function Recipe({ recipes, setShowIngList }) {
  return recipes.map((recipe) => (
    <div key={recipe.recipe.uri}>
      <Ingredients
        recipes={recipes}
        recipe={recipe}
        setShowIngList={setShowIngList}
      />
    </div>
  ));
}
export default Recipe;
