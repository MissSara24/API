//Rutas
const {Router} = require('express');
const router = Router();

//Raiz
router.get('/', (req,res) =>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then (res => res.json(fetch))
})

module.exports = router;
