// JS logic to display favorites section once the user saves their recipes => Will be stored in his profile.
//Display function => Creating elements to display it on screen.

// const displayRecipes = (data) =>{
//     //These data will be grabbed from the API request => property path
//             // For loop to iterate each recipe grabbed from the external API => They will be displayed on userProfile too
//         document.querySelector('#div4scroll').innerHTML = `
//         <div class= "column is-3 card"i
//             <div class="card-image">
//                 <figure><img src="${data.hits[0].recipe.image}" alt="..."></figure>
//             </div>
//             <div class="card-content">
//                 <p class="title">${data.hits[0].recipe.label}</p>
//                 <p class="subtitle">${data.hits[0].recipe.ingredients[ingredients.length]}</p>
//             </div>
//             <div class="content">
//                 <a href="${data.hits[0].recipe.url}">${data.hits[0].recipe.source}</a>
//             </div>
//         </div>  
//         `      
//     //Recipe description will be the url of recipe's directions grabbed from the API.
// }

// We grab the value => SearchRecipe fn with a fetch method of GET
const searchRecipes = async (e) =>{
    e.preventDefault();

    //These values instead of being document.querySelector will be the property path from the API?
    const recipe_name = document.querySelector('#findRecipe').value.trim();

    if(recipe_name){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipe_name }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            //Or a sweet alert saying that the recipe has been saved.
            document.location.replace('/recipe/:id');
        }else{
            alert('No recipe Found.')
        }
    };


};

// SaveRecipe fn with a fetch method of POST 
// const saveRecipe = async (e) =>{
//     e.preventDefault();

//     //Select them by
//     const recipeName = document.querySelector('#');
//     const recipeNutrients = document.querySelector('#');
//     const recipeDescription = document.querySelector('#');

//     if(recipeName && recipeNutrients && recipeDescription){
//         //We assign it to recipes api routes => In order to allow the user to create it or delete it.
//         const response = await fetch('/api/recipes', {
//             method: 'POST',
//             body: JSON.stringify({ recipeName, recipeNutrients, recipeDescription}),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if(response.ok){
//             document.location.replace('/userProfile');
//             //For loop to iterate each recipe saved from the API and run the displayRecipes function.
//         }else{
//             alert('Failed to save the Recipe. TRY Again!')
//         }
//     }
// };

//find button function
document.querySelector('#findBtn').addEventListener('click', searchRecipes);

//considering we have a save btn for each recipe grabbed from the third party API
// document.querySelector('whateverBtn').addEventListener('click', saveRecipe);
