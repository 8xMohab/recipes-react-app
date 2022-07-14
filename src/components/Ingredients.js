
function Ingredients({ recipe, recipes, setShowIngList }) {
  // show and hide ingredents
  const showIngHandler = () => {
    setShowIngList(
      recipes.filter((item) => item.recipe.uri === recipe.recipe.uri)
    );
  };
  return (
    <div className="recipe">
      <div
        className="image"
        style={{ backgroundImage: `url(${recipe.recipe.image})` }}
      ></div>
      <div className="recipe-des">
        <h2>{recipe.recipe.label}</h2>
        <button onClick={showIngHandler} className="btn btn-info">
          Show Ingredients
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
