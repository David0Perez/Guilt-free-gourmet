//We assign a function to allow user log in => CompareSync? For either values 
// entered by the user are the same.

const loginFormHandler = async (e) =>{
    e.preventDefault();

    //Collect values from the login form
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPass').value.trim();

    if(email && password){
        //Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        //We double check if the response is successful => It will give the user access to the profile
        if(response.ok){
            document.location.replace('/profile');
        }else{
            alert(response.statusText);
        }
    }
};

//If the user doesnt have an Account yet => Sign up
const signUpForm = async (e) =>{
    e.preventDefault();

    const username = document.querySelector('#nameLogin').value.trim();
    const email = document.querySelector('#signUpEmail').value.trim();
    const password = document.querySelector('#signUpPass').value.trim();

    //Conditional for values entered of each one
    if(email && password && username){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

         //Redirect to the profile
        if(response.ok){
            //sweet alert asking you to log in your information
            alert('You already Signed Up! Log in your account.')
            // document.location.replace('/userProfile');
        }else{
            alert(response.statusText);
        }
    };
    
};

//We call for both functions and assign a submit event on the buttons. => Currently assign on the form, not the buttons
document.querySelector('.signUpForm').addEventListener('submit', signUpForm);
document.querySelector('.logInForm').addEventListener('submit', loginFormHandler);
