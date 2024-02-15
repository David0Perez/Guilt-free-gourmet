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
    };
};

document.querySelector('#submitComment').addEventListener('submit', newCommentHandler);