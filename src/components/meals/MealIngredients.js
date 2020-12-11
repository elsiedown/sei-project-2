import React from 'react'


function MealIngredients({ meals }) {
  
  console.log(meals[0])
  return (
    <div className="ingredientsSection">
      <div>
        <h4 className="title is-4">Ingredients</h4>
      </div>
      <div className="ingredients">
        <p className="card-content">{meals[0].strIngredient1}</p>
        <p className="card-content">{meals[0].strIngredient2}</p>
        <p className="card-content">{meals[0].strIngredient3}</p>
        <p className="card-content">{meals[0].strIngredient4}</p>
        <p className="card-content">{meals[0].strIngredient5}</p>
        <p className="card-content">{meals[0].strIngredient6}</p>
        <p className="card-content">{meals[0].strIngredient7}</p>
        <p className="card-content">{meals[0].strIngredient8}</p>
        <p className="card-content">{meals[0].strIngredient9}</p>
        <p className="card-content">{meals[0].strIngredient10}</p>
        <p className="card-content">{meals[0].strIngredient11}</p>
        <p className="card-content">{meals[0].strIngredient12}</p>
        <p className="card-content">{meals[0].strIngredient13}</p>
        <p className="card-content">{meals[0].strIngredient14}</p>
        <p className="card-content">{meals[0].strIngredient15}</p>
        <p className="card-content">{meals[0].strIngredient16}</p>
        <p className="card-content">{meals[0].strIngredient17}</p>
        <p className="card-content">{meals[0].strIngredient18}</p>
        <p className="card-content">{meals[0].strIngredient19}</p>
        <p className="card-content">{meals[0].strIngredient20}</p>
      </div>
    </div>
  )
}
export default MealIngredients