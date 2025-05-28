// Fetch all recipes

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    // id, name, cuisisne, ingredients
    const recipesArray = data.recipes;
    console.log("Stored recipes:", recipesArray);
    // Display all recipes
    let updatedArray = recipesArray.map((item) => {
      let id = item.id;
      return {
        id,
        name: item.name,
        cuisine: item.cuisine,
        ingredients: item.ingredients,
        rating: item.rating,
        difficulty: item.difficulty,
        date: new Date(),
      };
    });
    console.log("Updated recipes:", updatedArray);

    // DIsplay all recipies within html document
    displayRecipes(updatedArray, "#all-recipes");

    // Filter and display high rated and easy recipes
    const highRatedEasy = updatedArray.filter(
      (recipe) => recipe.rating > 4.6 && recipe.difficulty === "Easy"
    );

    displayRecipes(highRatedEasy, "#high-rated-easy");

    const noOliveOil = updatedArray.filter(
      (recipe) =>
        !recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes("olive oil")
        )
    );
    displayRecipes(noOliveOil, "#no-olive-oil");
  })

  .catch((error) => {
    console.log(error);
  });

// Display array in document

function displayRecipes(recipes, parentSectionId) {
  const container = document.querySelector(
    `${parentSectionId} .recipes-container`
  );

  if (!container) {
    console.error("Couldn't find container in:", parentSectionId);
    return;
  }

  container.innerHTML = recipes
    .map(
      (recipe) => `
    <div class="recipe" data-id="${recipe.id}">
      <h3>${recipe.name}</h3>
      <p>ID: ${recipe.id}</p>
      <p>Cuisine: ${recipe.cuisine}</p>
      <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
      <p>Rating: ${recipe.rating} (${recipe.difficulty})</p>
      <p>Date: ${recipe.date.toLocaleDateString()}</p>
    </div>
  `
    )
    .join("");
}


// at the end fill the readme:

// this is the concept, this is a technologies, showcase the code, what methods i used and why,

// practice more with JS, take each syntax separately if you have a problem
