import React from "react";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr className={index % 2 !== 0 ? ("whiteBackground") : ("tanBackground")}>
              <td name="name">{recipe.name}</td>
              <td name="cuisine">{recipe.cuisine}</td>
              <td name="photo">
                <img src={recipe.photo} alt="photo-url" height="100" width="100"/>
              </td>
              <td name="ingredients">{recipe.ingredients}</td>
              <td name="preparation">{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>delete</button>
              </td>
            </tr>
          ))}    
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
