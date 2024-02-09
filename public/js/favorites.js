// JS logic to display favorites section once the user saves their recipes => Will be stored in his profile.
//Display function => Creating elements to display it on screen.


// We grab the value => SearchRecipe fn with a fetch method of GET
const searchRecipes = async (e) =>{
    e.preventDefault();

    const recipeName = document.querySelector('#');
    const recipeNutrients = document.querySelector('#');
    const recipeDescription = document.querySelector('#');

    if(recipeName && recipeNutrients && recipeDescription){
        const response = await fetch('/api/externalRoutes', {
            method: 'GET',
            body: JSON.stringify({ recipeName, recipeNutrients, recipeDescription }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            document.location.replace('/discoverRecipes');
        }else{
            alert('No recipe Found.')
        }
    }
};

// SaveRecipe fn with a fetch method of POST 
const saveRecipe = async (e) =>{
    e.preventDefault();

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
        }else{
            alert('Failed to save the Recipe. TRY Again!')
        }
    }
};

    //considering we have a save btn for each recipe grabbed from the third party API
    document.querySelector('whateverBtn').addEventListener('submit', saveRecipe);
