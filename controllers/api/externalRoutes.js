const router = require('express').Router();

router.get('/', async (req, res) =>{
    //Third party API request
    let APP_ID = '526060cb';
    let apiKey = '1992a8d8dcc021eb8c707c160456026c';

    try{
       const apiData =  await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${apiKey}&q=salad`);
       const apiJSON = await apiData.json();

       console.log(apiJSON);
        res.status(200).json(apiJSON);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;