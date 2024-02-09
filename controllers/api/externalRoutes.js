const router = require('express').Router();

router.get('/', async (req, res) =>{
    //Third party API request
    try{
       const apiData =  await fetch('/ external API request');
       const apiJSON = await apiData.json();

        res.status(200).json(apiJSON);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;