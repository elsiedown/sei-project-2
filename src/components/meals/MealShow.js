import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function MealShow() {
  const [meals, setMeals] = React.useState('')
  const [categories, setCategories] = React.useState('')
  const { id } = useParams()

 



  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

        const { data: similarCategories } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`)

        setMeals(data)
        setCategories(similarCategories)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])




  
  console.log(categories)
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
                <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span> Instructions</h4>
                <p>{meals.meals[0].strInstructions}</p>
                <hr />
              </div>
            </div>
          </div>
          :
          <p>...loading</p>
        }
      </div>
    </section>
  )
}
export default MealShow