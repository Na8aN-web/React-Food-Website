import React from 'react';
import '../styles/menuItemStyle.css';
import data from '../data';

function MenuItem() {
    const [dish, setDish] = React.useState(data);
    
      const mealArray = dish.meals
      let arr = []
  while(arr.length < 4){
    const randomNumber = Math.floor(Math.random() * mealArray.length + 1)
    if(arr.indexOf(randomNumber) ===-1) {
      arr.push(randomNumber)
    }
  }

    
  return (
    <>
   <h1 className='menu-header'>Our Menu</h1>
    <div className='main'>
    <div className='menu-card'>
      <img src={dish.meals[arr[0]].strMealThumb} />
      <h1>{dish.meals[arr[0]].strMeal}</h1>
    </div>
    <div className='menu-card'>
      <img src={dish.meals[arr[1]].strMealThumb} />
      <h1>{dish.meals[arr[1]].strMeal}</h1>
    </div>
    <div className='menu-card'>
      <img src={dish.meals[arr[2]].strMealThumb} />
      <h1>{dish.meals[arr[2]].strMeal}</h1>
    </div>
    <div className='menu-card'>
      <img src={dish.meals[arr[3]].strMealThumb} />
      <h1>{dish.meals[arr[3]].strMeal}</h1>
    </div>
    </div>
    </>
  )
}

export default MenuItem