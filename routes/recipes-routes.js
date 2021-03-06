const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');
const methodOverride = require('method-override');

const router = express.Router();

const recipesFile = './data/recipes.json';

const recipesController = require('../controllers/recipes');

router.use(express.urlencoded({
    extended: true
}));

router.use(methodOverride('_method'));

router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:id', express.static(path.join(__dirname, '..', '/public/')));

//

router.get('/new', recipesController.getAddRecipe);

router.post('/', recipesController.postAddRecipe);

router.get('/:id/edit', recipesController.getEditRecipeById);

router.get('/:id/delete', recipesController.getDeleteRecipeById);

router.get('/reset', recipesController.getResetRecipes);

router.post('/sort', recipesController.getSortedRecipes);

router.get('/:id', recipesController.getRecipeById);

router.put('/:id', recipesController.putRecipeById);

router.get('/', recipesController.getShowAllRecipes);

module.exports = router;