import React from 'react'
import { useHistory } from 'react-router-dom'
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
  return (
    <>
      <section className="homepage">
        <h1>Whats in Your Fridge?</h1>
        <form onSubmit={handleFormSubmit}>
          <input autoFocus 
            type="text"
            placeholder="Search"
            onChange={handleFormChange}
          />
          <button>Look for Meal</button>
        </form>
      </section>
    </>
  )
}
export default Home