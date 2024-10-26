function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientElement = document.querySelector("#ingredient");

  let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
  let prompt = `Generate a recipe using ${ingredientElement.value}. Make is short. Do not use introductions. Write it in HTML. Do not say it is HTLM. Do not write any titles. Sign it at the end with SheCodes AI in bold  using <strong> </strong>.`;
  let context = "You are an experienced cook who likes to cook economic dishes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating receipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
