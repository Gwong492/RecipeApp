import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({...initialState});
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = formData.name;
    let cuisine = formData.cuisine;
    let photo = formData.photo;
    let ingredients = formData.ingredients;
    let preparation = formData.preparation;
    console.log(name, cuisine, photo, ingredients, preparation);
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setFormData({...initialState});
  };
  
  return (
    <form name="create">
      <table className="inputTable">
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              ></input>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                onChange={handleChange}
                value={formData.photo}
                placeholder="Photo Url"
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              ></textarea>
            </td>
            <td>
              <button 
                type="submit"
                onClick={handleSubmit}
              >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
