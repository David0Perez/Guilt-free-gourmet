
// New recipe form Handler
const newRecipeForm = async (e) =>{
    e.preventDefault();

    // recipe_name, ingredients, directions
    const newRecipe = document.querySelector('#recipe-name').value.trim();
    const newIngredients = document.querySelector('#recipe-ingredients').value.trim();
    const newDescription = document.querySelector('#recipe-directions').value.trim();

    //Bear in mind => Recipes created are just gonna be displayed on a profile section
    // Recipes requested by a third party API are gonna show up on a Explore Recipes section
    if(newRecipe && newIngredients && newDescription){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify( { newRecipe, newIngredients, newDescription }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok){
            console.log('Recipe Created! Go to your profile.')
            console.log(response)
        }else{
            alert('The Recipe couldn`t be created');
        }
    }
};

document.querySelector('#createBtn').addEventListener('submit', newRecipeForm);

// For further implementations => Delete btn
