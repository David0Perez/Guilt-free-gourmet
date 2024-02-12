// New recipe form Handler
const newRecipeForm = async (e) =>{
    e.preventDefault();

    // recipe_name, ingredients, directions
    const recipeName = document.querySelector('#recipe-name').value.trim();
    const recipeIngredients = document.querySelector('#recipe-ingredients').value.trim();
    const recipeDirections = document.querySelector('#recipe-directions').value.trim();

    //Bear in mind => Recipes created are just gonna be displayed on a profile section
    // Recipes requested by a third party API are gonna show up on a Explore Recipes section
    if(recipeName && recipeIngredients && recipeDirections){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify( { recipeName, recipeIngredients, recipeDirections }),
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
            document.location.replace('/userProfile');
        }else{
            alert('Couldnt Post this comment. Please Try again!')
        }
    }
};

document.querySelector('#createBtn').addEventListener('submit', newRecipeForm);
document.querySelector('#submitComment').addEventListener('submit', newCommentHandler);

// For further implementations => Delete btn