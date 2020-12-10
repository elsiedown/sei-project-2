import React from 'react'

function Home() {

  const handleFormSubmit = () => {
    console.log('click')
  }

  const handleFormChange = () => {
    console.log('submitted')
  }

  return (
    <>
      <section className="homepage">
        <h1>Whats in Your Fridge?</h1>
        <form onSubmit={handleFormSubmit}>
          <input 
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