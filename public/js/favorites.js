// JS logic to display favorites section once the user saves their recipes => Will be stored in his profile.

// We grab the value => SearchRecipe fn with a fetch method of GET
const searchRecipes = async (e) =>{
    e.preventDefault();

    //These values instead of being document.querySelector will be the property path from the API?
    const recipeName = document.querySelector('#findRecipe').value.trim();
    // const recipeIngredients = document.querySelector('#');
    // const recipeDescription = document.querySelector('#');

    if(recipeName){
        const response = await fetch('/api/externalAPI', {
            method: 'POST',
            body: JSON.stringify({ recipeName }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            //Or a sweet alert saying that the recipe has been saved.
            const dataResponse = await response.json();
            console.log(dataResponse)
        }else{
            alert('No recipe Found.')
        }
    };

    displayRecipes();
};

//Display function => Creating elements to display it on screen.

const displayRecipes = async (data) =>{
    //These data will be grabbed from the API request => property path
            // For loop to iterate each recipe grabbed from the external API => They will be displayed on userProfile too
    document.querySelector('#intro-page').innerHTML = `
    <div class= "column is-3 card">
        <div class="card-image">
            <figure><img src="${data.img}" alt="..."></figure>
        </div>
        <div class="card-content">
            <p class="title">${data.recipeName}</p>
            <p class="subtitle">${data.recipeIngredients}</p>
        </div>
        <div class="content">${data.recipeDescription}</div>
        </div>  
    `
    //Recipe description will be the url of recipe's directions grabbed from the API.
}

// SaveRecipe fn with a fetch method of POST 
const saveRecipe = async (e) =>{
    e.preventDefault();

    //Select them by
    const recipeName = document.querySelector('#');
    const recipeNutrients = document.querySelector('#');
    const recipeDescription = document.querySelector('#');

    if(recipeName && recipeNutrients && recipeDescription){
        //We assign it to recipes api routes => In order to allow the user to create it or delete it.
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeName, recipeNutrients, recipeDescription}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            document.location.replace('/userProfile');
            //For loop to iterate each recipe saved from the API and run the displayRecipes function.
        }else{
            alert('Failed to save the Recipe. TRY Again!')
        }
    }
};

//find button function
document.querySelector('#findBtn').addEventListener('click', searchRecipes);

//considering we have a save btn for each recipe grabbed from the third party API
// document.querySelector('whateverBtn').addEventListener('click', saveRecipe);
