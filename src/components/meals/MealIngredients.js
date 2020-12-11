import React from 'react'

function MealIngredients({ meals }) {
  
  const ingredients = () => {
    const final = []
    for (const i in meals[0]) {
      if (i.startsWith('strIng') && meals[0][i]) {
        final.push(meals[0][i])
      }
    }
    return final
  }
  return (
    <div className="ingredientsSection">
      <div>
        <h4 className="title is-4">Ingredients</h4>
      </div>
      <div className="ingredients">
        {ingredients().map(ing => {
          return <p key={ing[ing]} className="card-content ingred">{ing}</p>
        })}
      </div>
    </div>
  )
}
export default MealIngredients