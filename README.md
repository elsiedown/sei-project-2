# Project 2 - What's in Your Fridge?

## GA SEI Project 2: React App

You can find a hosted version of our App here : [What’s In Your Fridge?](https://whatsinyafridge.netlify.app/)

## Collaborator:

Tobi Lesi - [Github](https://github.com/olulesi)

## Overview

This was my second project on the General Assembly Software Engineering Immersive course.  As a pair, we were given 48 hours to build a React.js application of our choice, which consumed a public API and used RESTful routes.

The idea of our App is to help users find recipes based on the food that they have in their fridge. Users can search the main ingredient that they have (eg. ‘chicken’, ‘pork’ etc.) and are given a set of recipes to choose from which contain that ingredient. 

This Readme will outline the approach I took and the wins and challenges that I encountered along the way.


## Brief

The App should:

* **Consume a public API** – this could be anything but it must make sense for your project
* **Have several components** - At least one classical and one functional
* **The app should include a router** - with several “pages”
* **Include wireframes** - that you designed before building the app
* **Be deployed online** and accessible to the public


## Timeframe and Technologies Used

**Timeframe**: 48 hours

**Front-End:**

* JavaScript ES6
* React.js
* HTML5 & CSS3 with Animation
* SASS
* Bulma CSS Framework
* Yarn
* [MealDB Api](https://www.themealdb.com/api.php)
* Axios (for RESTful routes)
* react-router-dom


**Dev Tools:**

* Insomnia
* VSCode
* Eslint
* Git
* GitHub & Github Pages
* Google Chrome Dev Tools
* Google Fonts

## Features

* Homepage
* Index of all recipes
* Search or filter by main ingredient available
* Detail page for each recipe with link to similar recipes (which include that same ingredient or are in the same category)
* 'Yuck' feature - to remove unappetising recipes
* 'My fridge is full' button which is similar to the ‘I’m Feeling Lucky’ feature and takes you to a random recipe 
* 'No meals found' page

## Approach Taken

* We started by brainstorming ideas - realising that we both had an interest for food and cooking we decided to build a recipe searching App. After researching food-based APIs, we decided to use MealDb which seemed to have relatively straightforward documentation and multiple recipes available (which could be searched by ingredient or category). Given that some of the recipes available were slightly unappetising, we decided to take a slightly comical approach - (hence the homepage photo) and the ‘yuck’ button available on each recipe card to remove that recipe from the search results. 
* Happy with how we were going to access the information from the API, we moved onto planning and setting up the different pages and the RESTful routes, testing in Insomnia as we went.
* We pair-coded most of the project but also worked on certain tasks individually to use our time most efficiently. We worked on  the more complex tasks - eg. Figuring out the filter function together.  We did this by retrieving the search term from the URL and setting this as a variable. We then used this variable within the axios request, filtering the data and retrieving the recipes which contained that searched ingredient:

```
// Search Function:


  const handleFormSubmit = event => {
    event.preventDefault()
    history.push(`/meals?search=${search}`)
  }

// Accessing the searched ingredient from the Meal Db database:

  const params = new URLSearchParams(location.search)
  const searchterm = params.get('search')


  const [data, setData] = React.useState('')
  const [hasError, setHasError] = React.useState(false)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchterm}`)
        setData(data)
        if (!data.meals) {
          setHasError(true)
        }
      } catch (err) {
        console.log(err)
      }
    } 
    getData()
  }, [searchterm])

```
* We also worked on the 'Similar Meals' functionality together. On each Recipe page - we displayed other recipes from the same category - eg. 'fish' or 'vegetarian'. We did this by setting up another request to the MealDb, filtering the recipes by the assigned category which in turn showed the related meals.

```
function MealShow() {
  const [meals, setMeals] = React.useState('')
  const [categories, setCategories] = React.useState('')
  const [ingredients, setIngredients] = React.useState('')
  const similarMeals = categories.meals
  const { id } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const { data: similarCategories } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`)
        setIngredients(Object.keys(data.meals[0]))
        setMeals(data)
        setCategories(similarCategories)
        console.log(ingredients)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  
  return (
    <div className="recipe-animation">
      <MealShowCard 
        meals={meals}
        similarMeals={similarMeals}/>
    </div>
  )
}
export default MealShow

```
* Another axios request that we set up was the for 'My fridge is full' functionality, which generated a random recipe for the user. MealDb provided us with a random meal request so this was relatively straightforward to implement, and then we passed down the meal data as a prop into the meal show component.


```

// The handle 'My fridge is full' function: 
  const handleRandomise = event => {
    event.preventDefault()
    history.push('/meals/random')
  }

// Random Meal Page:

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
    <MealShowCard 
      meals={meals}
      similarMeals={similarMeals} />
  )
}


export default MealRandomShow

```



* We then styled up our App, using Bulma and our own styling. 

## Site Visuals
![](readme-screenshots/whats-in-your-fridge.mov)
**Landing Page**
![](readme-screenshots/screenshot-one.png)
**Filter by Ingredient**
![](readme-screenshots/screenshot-two.png)
**Recipe Page**
![](readme-screenshots/screenshot-three.png)

## Challenges

* A main challenge was finding a suitable API to use. We soon discovered that lots of APIs required a payment plan to access full features and that others had complex and difficult documentation to understand. We decided that choosing an API which was simple to understand was the best option, even if that meant the quality of the recipes was not as high as we hoped.

* The timeframe was also a challenge and we had to make sure we were not too ambitious with our planning and that we met the deadline.

## Wins
* The project was invaluable in terms of pair programming and being able to share and learn with my partner. It was great to swap skills and learn from each-other. 
* I think we managed to achieve a lot in the small timeframe that we had and I was happy with both the functionality and styling.

## What I Learned
* How to use a public API - as mentioned this took time to figure out which API was most suitable for our project, based on the documentation provided and the data we coudl access for free
* How to build a React App, using RESTful routes
* Pair programming - this was the first project I had pair-coded and I learned the benefits of sharing skills and learning from one another
* Time management in order to reach MVP within the short timeframe - invaluable in terms of learning how to plan efficiently and achieve results within a short timeframe


## Future Features

* If I had more time I would like to improve the ‘Yuck’ functionality - instead of making the display ‘none’ I would remove the item from the array and this would therefore fix the bug where the styling goes a bit off when you click the yuck button but we ran out of time to achieve this.
* We would have liked to have added the possibility of adding multiple ingredients in the search list but this was limited to us due to the services provided by the MealDb database.