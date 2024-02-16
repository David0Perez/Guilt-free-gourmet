//New comment form Handler
const newCommentHandler = async (e) =>{
    e.preventDefault();

    const textComment = document.querySelector('#comment_text').value.trim();

    if(textComment){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ textComment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            const data = await response.json();
            console.log('Comment added');
            console.log(data);
            document.location.replace('/profile');
        }else{
            alert('Couldnt Post this comment. Please Try again!')
        }
    };
};

document.querySelector('#submitComment').addEventListener('submit', newCommentHandler);