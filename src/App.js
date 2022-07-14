import React, { useState } from "react";
import Recipe from "./components/Recipe";
function App() {
  const App_Id = "1da39d03";
  const App_Key = "6be6e49d0ee85d68795cf9f7a0f26f52";
  // list of items to display it's ingredients
  const [showIngList, setShowIngList] = useState([]);
  // store the recipes
  const [recipes, setRecipes] = useState([]);
  // update the input text
  const [input, setInput] = useState("");
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    getRecipe();
  };
  // close the ingredients event
  const closeIngHandler = () => {
    setShowIngList([]);
  };
  // input handler
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  // remove whatever in the input field when gets focused on
  const focusHandler = () => {
    setInput("");
  };
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${App_Id}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="App container-fluid">
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={inputHandler}
          onFocus={focusHandler}
          type="text"
          placeholder="Chicken..."
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {
        // mapping through a list of recipes
        showIngList.map((item) => (
          <div className="recipe-display" key={item.recipe.url}>
            <div className="recipe-des">
              <h2>{item.recipe.label}</h2>
              <p>Ingredients:</p>
              <ul className="list-group list-group-flush">
                {item.recipe.ingredientLines.map((ingredent, key) => (
                  <li key={key} className="list-group-item">
                    {ingredent}
                  </li>
                ))}
              </ul>
              <button onClick={closeIngHandler} className="btn btn-danger">
                Close
              </button>
            </div>
          </div>
        ))
      }
      <div className="recipes-container">
        <Recipe recipes={recipes} setShowIngList={setShowIngList} />
      </div>
    </div>
  );
}

export default App;
