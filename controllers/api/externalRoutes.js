const router = require('express').Router();

router.get('/', async (req, res) =>{
    //Third party API request
    let APP_ID = '46feae64';
    let apiKey = 'fa91b35fcbae8dd1363f5105c7a47c5b';

    try{
        //that q = user input when search
       const apiData =  await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${apiKey}&q=salad`);
       const apiJSON = await apiData.json();

       console.log(apiJSON);
        res.status(200).json(apiJSON);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
});
// https://api.edamam.com/api/recipes/v2?type=public&app_id=526060cb&app_key=fa91b35fcbae8dd1363f5105c7a47c5b&q=salad
module.exports = router;
