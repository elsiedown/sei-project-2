import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function MealShow() {


  const [data, setData] = React.useState('')
  const meals = data.meals
  console.log(meals)
  const { id } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  
  return (
    <section className="section">
      <div className="container">
        {data ?
          <div>
            <h2 className="title has-text-centered">{data.meals[0].strMeal}</h2>
            <hr />
            <div className="columns showPage">
              <div className="column is-half">
                <figure className="image">
                  <img src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} />
                </figure>
              </div>
              <div className="column is-half showPage">
                <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span> Instructions</h4>
                <p>{data.meals[0].strInstructions}</p>
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