//New comment form Handler
const newCommentHandler = async (e) =>{
    e.preventDefault();
    console.log('Hello world')

    const comment_text = document.querySelector('#comment_text').value.trim();
    const recipe_id = +document.querySelector('#submitComment').getAttribute('data-currentId');

    console.log(recipe_id);

    if(comment_text && recipe_id){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, recipe_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            const data = await response.json();
            console.log('Comment added');
            console.log(data);
            // document.location.reload();
        }else{
            alert('Couldnt Post this comment. Please Try again!')
        }
    };
};

document.querySelector('#submitComment').addEventListener('submit', newCommentHandler);