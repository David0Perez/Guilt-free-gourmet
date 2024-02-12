// New recipe form Handler
const newRecipeForm = async (e) =>{
    e.preventDefault();

    // recipe_name, ingredients, directions
    const recipe_name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const description = document.querySelector('#recipe-directions').value.trim();

    //Bear in mind => Recipes created are just gonna be displayed on a profile section
    // Recipes requested by a third party API are gonna show up on a Explore Recipes section
    if(recipe_name && ingredients && description){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify( { recipe_name, ingredients, description }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok){
            alert('Recipe Created! Go to your profile.')
        }else{
            alert('The Recipe couldn`t be created');
        }
    }
};

//New comment form Handler
const newCommentHandler = async (e) =>{
    e.preventDefault();

    const textComment = document.querySelector('#comment_text');

    if(textComment){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ textComment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            document.location.replace('/profile');
        }else{
            alert('Couldnt Post this comment. Please Try again!')
        }
    }
};

//Find recipe 
const findRecipe = async (e) =>{
    e.preventDefault();

    const searchFavorite = document.querySelector('#searchFavorite').value.trim();

    if(searchFavorite){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ searchFavorite }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            document.location.replace('/recipe/:id');
        }else{
            console.log('Error');
        }
    }
};

document.querySelector('#createBtn').addEventListener('submit', newRecipeForm);
document.querySelector('#submitComment').addEventListener('submit', newCommentHandler);

//Find recipe button function
document.querySelector('#findRecipeBtn').addEventListener('submit', findRecipe);

// For further implementations => Delete btn
