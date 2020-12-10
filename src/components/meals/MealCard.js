import React from 'react'


function MealCard({ strMeal, strMealThumb }) {
  return (
    <div className="pic column is-one-third-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{strMeal}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={strMealThumb} alt={strMeal} />
          </figure>
        </div>
      </div>
    </div>
  )
}
export default MealCard