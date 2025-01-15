# Delicious Food Recipes App

A simple and intuitive React application for managing your favorite recipes. Users can create, view, and delete recipes, while enjoying a beautifully styled interface.

## Features

- **Create Recipe**:
  - Add a new recipe with details such as name, cuisine, photo URL, ingredients, and preparation instructions.
- **View Recipes**:
  - Display a list of recipes in a table format, showcasing all essential details, including an image of the dish.
- **Delete Recipe**:
  - Remove recipes from the list with a simple click.
- **Responsive Design**:
  - Styled for clarity and visual appeal with zebra-striped table rows and appropriate column widths.

## Development Instructions

1. Locate the `TODO` comments in the code to implement the necessary functionality.
2. Use React state to manage the list of recipes.
3. Ensure all input and button elements follow the specified naming conventions:
   - `<input name="name">`
   - `<input name="cuisine">`
   - `<input name="photo">`
   - `<textarea name="ingredients">`
   - `<textarea name="preparation">`
   - `<button name="delete">`

### Form Requirements

- The form for creating a recipe should include:
  - **Name** (text input): Name of the dish.
  - **Cuisine** (text input): Cuisine type.
  - **Photo URL** (text input): URL of the dish photo.
  - **Ingredients** (textarea): List of ingredients.
  - **Preparation** (textarea): Instructions for preparing the dish.

### Table Requirements

- Each recipe should display the following details in a table row:
  - Name
  - Cuisine
  - Photo (scaled using `object-fit` with dimensions set to 100% for width and height).
  - Ingredients (displayed in a scrollable box if content exceeds column width).
  - Preparation (also scrollable).
  - A **Delete** button to remove the recipe.

## Styling Instructions

1. **Header**:
   - The "Delicious Food Recipes" heading should:
     - Use the 'Playfair Display SC' font (already imported).
     - Be centered and sized at 64px.
2. **Table Styling**:
   - Set column widths using `nth-child`:
     - Ingredients and preparation columns: 30%.
     - Other columns: 10%.
   - Apply zebra striping to rows in the `tbody` using `nth-child(odd)`.
     - Suggested color: `#fff0c7`.
3. **Scrollable Content**:
   - Wrap ingredients and preparation text in a `<p>` tag inside a `<td>` with the `content_td` class.
   - Apply scrollbars if text overflows.
4. **Image Styling**:
   - Use `object-fit: scale-down` to resize images proportionally.

## Success Criteria

### Functionality

- Users can:
  - Create a new recipe entry, which is added to the end of the list.
  - View all recipes in a well-structured table format.
  - Delete any recipe from the list.

### React Code Organization

- Use multiple components to separate concerns.
- Maintain recipe data in the state for efficient updates.
- Implement handlers and attributes as needed for interactivity.

### General Code Organization

- Avoid code duplication.
- Use helper functions and reusable components where applicable.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Gwong492/RecipeApp.git
   cd recipe-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

##

