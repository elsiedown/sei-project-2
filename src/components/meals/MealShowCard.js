import React from 'react'
import MealCategoryCard from './MealCategoryCard'
import MealIngredients from './MealIngredients'

function MealShowCard( { meals, similarMeals }) {

  return (
    <>
      <section className="section">
        <div className="container">
          {meals ?
            <div>
              <h2 className="title has-text-centered">{meals.meals[0].strMeal}</h2>
              <hr />
              <div className="columns showPage">
                <div className="column is-half">
                  <figure className="image">
                    <img src={meals.meals[0].strMealThumb} alt={meals.meals[0].strMeal} />
                  </figure>
                </div>
                <div className="column showPage is-half">
                  <h4 className="title is-4">Cuisine: <span className="title is-6">{meals.meals[0].strArea}</span></h4>
                  <h4 className="title is-4">Instructions</h4>
                  <p>{meals.meals[0].strInstructions}</p>
                </div>
              </div>
              <MealIngredients {... meals}/>
            </div>
            :
            <p>...loading</p>
          }
          <hr />
          <div className="heading-meal">
            <h2>Similar Meals</h2>
          </div>
          <section className="carousel-container">
            {similarMeals ?
              similarMeals.map(meal => (
                <MealCategoryCard key={meal.idMeal} {...meal} />
              ))
              :
              <p>...loading</p>
            }
          </section>
        </div>
      </section>
  )
    </>
  )
}

export default MealShowCard