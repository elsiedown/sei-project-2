import React from 'react'
import { useHistory } from 'react-router-dom'
import image from '../../styles/images/image-logo.png'



function Home() {
  const [search, setSearch] = React.useState('')
  // let searchvalue = ''
  const history = useHistory()

  const handleFormSubmit = event => {
    event.preventDefault()
    history.push(`/meals?search=${search}`)
  }
  const handleFormChange = event => {
    setSearch(event.target.value)
  }

  const handleRandomise = event => {
    event.preventDefault()
    history.push('/meals/random')
  }
  return (
    <>
      <section className="homepage">
        <h1>Whats in Your Fridge?</h1>
        <form onSubmit={handleFormSubmit}>
          <input autoFocus 
            type="text"
            placeholder="Search Your Ingredient"
            onChange={handleFormChange}
          />
          <button className="button"
            value="random">Look for Meal</button>
        </form>
        <img onClick={handleRandomise} className="button randomise" src={image}></img>
      </section>
    </>
  )
}
export default Home