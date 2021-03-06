const formAddIngredientBtn = document.querySelector(".add-form__add-ingredient-btn");
const formAddInstructionBtn = document.querySelector(".add-form__add-instruction-btn");

const formDeleteInstructionBtn = document.querySelector(".add-form__delete-instruction-btn");
const formDeleteIngredientBtn = document.querySelector(".add-form__delete-ingredient-btn");

const formIngredientsSection = document.querySelector(".add-form__ingredients")
const formInstructionsSection = document.querySelector(".add-form__instructions");

const addIngredient = () => {

    ingredientNum = document.querySelectorAll('.add-form__ingredient').length

    formIngredientsSection.insertAdjacentHTML('beforeend',
        `<div class="add-form__ingredient">
            <input type="text" name="ingredient[name][]" placeholder="ingredient" value=""></input>
            <input type="text" name="ingredient[amount][]" placeholder="quantity" value=""></input>
            <input type="notes" name="ingredient[notes][]" placeholder="notes" value=""></input>
        </div>`)
}

formAddIngredientBtn.addEventListener('click', addIngredient);

const addInstruction = () => {

    instructionNum = document.querySelectorAll('.add-form__instruction').length

    formInstructionsSection.insertAdjacentHTML('beforeend',
        `
        <div class="add-form__instruction">
            <h3>#${instructionNum}</h3>
            <input type="text" name="instructions[]" value=""></input>
        </div>
        `
    )
}


formAddInstructionBtn.addEventListener('click', addInstruction);

const deleteIngredient = () => {
    const ingredientEls = document.querySelectorAll('.add-form__ingredient')

    formIngredientsSection.removeChild(ingredientEls[ingredientEls.length - 1]);
}

formDeleteIngredientBtn.addEventListener('click', deleteIngredient);

const deleteInstruction = () => {
    const instructionEls = document.querySelectorAll('.add-form__instruction')

    formInstructionsSection.removeChild(instructionEls[instructionEls.length - 1]);
}

formDeleteInstructionBtn.addEventListener('click', deleteInstruction);