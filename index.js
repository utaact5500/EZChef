async function searchrecipes(){
    const searchInput = document.getElementById("searchInput").value;
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = "";


    try{
        const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=10a84d9e&app_key=776b79e8871d37f129cf1e05b0cb2774`);
        if(!response.ok){
            throw new Error(`Http error! status : ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        data.hits.forEach(recipe => {
            const recipeHTML = `
            <div class = "recipe">
            <h2>${recipe.recipe.label}</h2>
            <img src = "${recipe.recipe.image}" alt="{recipe.recipe.label}">
            <a href = "${recipe.recipe.url}" target="_blank">View Recipe</a>
            </div>
            `;


            recipesContainer.innerHTML += recipeHTML;
        })
    } catch(error){
        console.log('Error fetching recipes:', error);
    }
}