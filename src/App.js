import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'

import IngredientIndex from './components/ingredients/IngredientIndex'
import IngredientShow from './components/ingredients/IngredientShow'

import MealIndex from './components/meals/MealIndex'
import MealShow from './components/meals/MealShow'
import MealRandomShow from './components/meals/MealRandomShow'





function App() {
  // console.log(process.env.REACT_APP_MY_API_KEY)
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meals/random" component={MealRandomShow}/>
        <Route path="/meals/:id" component={MealShow}/>
        <Route path="/meals" component={MealIndex}/>
        <Route path="/ingredients/:id" component={IngredientShow}/>
        <Route path="/ingredients" component={IngredientIndex}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
