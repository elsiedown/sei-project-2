import React from 'react'
import MealCard from './MealCard'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


function MealIndex( ) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const searchterm = params.get('search')
  const [data, setData] = React.useState('')
  const meals = data.meals
  console.log(meals)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchterm}`)
        setData(data)
      } catch (err) {
        console.log(err)
      }
    } 
    getData()
  }, [])
  console.log(meals)
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {meals ?
            meals.map(meal => (
              <MealCard key={meal.idMeal} {...meal} />
            ))
            :
            <p>...loading</p>
          }
        </div>
      </div>
    </section>
  )
}
export default MealIndex