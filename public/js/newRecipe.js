
// New recipe form Handler
const newRecipeForm = async (e) =>{
    e.preventDefault();
    // recipe_name, ingredients, directions
    const recipe_name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const description = document.querySelector('#recipe-directions').value.trim();

    //Bear in mind => Recipes created are just gonna be displayed on a profile section
    // Recipes requested by a third party API are gonna show up on a Explore Recipes section
    if(recipe_name && ingredients && description ){
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify( { recipe_name, ingredients, description}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok){
            const data = await response.json();
            alert('Recipe Created! Go to your Recipes section!')
            console.log(data);
        }else{
            alert('The Recipe couldn`t be created');
        }
    }
};

document.querySelector('#new-Recipe-form').addEventListener('submit', newRecipeForm);
