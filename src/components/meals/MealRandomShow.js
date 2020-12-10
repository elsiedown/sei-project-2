import React from 'react'
import axios from 'axios'
import MealCategoryCard from './MealCategoryCard'


function MealRandomShow() {
  const [meals, setMeals] = React.useState('')
  const [categories, setCategories] = React.useState('')
  const similarMeals = categories.meals

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        const { data: similarCategories } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`)
        setMeals(data)
        setCategories(similarCategories)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  

  return (
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
}

export default MealRandomShow