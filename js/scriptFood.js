var btnCategory1El = document.querySelector('#beef');
// var btnCategory2El = document.querySelector('#btn-category-2');
// var btnCategory3El = document.querySelector('#btn-category-3');
// var btnCategory4El = document.querySelector('#btn-category-4');
// var meal1DivEl = document.querySelector('#meal-1')
var foodImg1 = document.querySelector('#food-img-1');
var foodImg2 = document.querySelector('#food-img-2');
var foodImg3 = document.querySelector('#food-img-3');
var foodImg4 = document.querySelector('#food-img-4');


//be able to call API and console log a response 
//make sure API works and we are able to pull data we care about 

//base url
// https://www.themealdb.com/api/json/v1/1/



  //function to look up random meals
var searchMeal = function (number) {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      console.log(data.meals[0].strMeal);
      // if (data.meals[0].strIngrdient1 !== '') {
      //   console.log(data.meals[0].strIngredient1)
      //   meal1DivEl.textContent = 'Ingredient 1: ' + data.meals[0].strIngredient1;
      // }
      return data;
    })}


  //function to display ingredients 
// var displayIngredients = function (mealName) {
//   for (let i = 0; i < categoryButton.length; i++)

// }

//function to select category

searchMeal();

var displayIngredients = function () {
  
}

//search meal by category
// www.themealdb.com/api/json/v1/1/categories.php

var searchRandomMealCategory = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      return data;
    })}

  //function to display ingredients 
// var displayIngredients = function (mealName) {
//   for (let i = 0; i < categoryButton.length; i++)

// }

//function to select category

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

searchRandomMealCategory();

// var searchMealCategory = function () {
//   var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
      
//       return data;
//     })}

var searchMealCategoryBeef = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      foodImg1.src = data.meals[(Math.floor(Math.random() * 41))].strMealThumb;
      foodImg2.src = data.meals[(Math.floor(Math.random() * 41))].strMealThumb;
      foodImg3.src = data.meals[(Math.floor(Math.random() * 41))].strMealThumb;
      foodImg4.src = data.meals[(Math.floor(Math.random() * 41))].strMealThumb;
      console.log(data.meals[0].strMealThumb)
    return data;
    })}
;

searchMealCategoryBeef();

btnCategory1El.addEventListener('click', searchMealCategoryBeef)
// btnCategory2El.addEventListener('click', searchRandomMealCategory);
// btnCategory3El.addEventListener('click', searchMealCategory);
// var displayIngredients = function () {
// }

var displayMealsfromCategory = function () {
}

//to-do
//Make functions for each button category
//on button click, search individual category, display divs with img sources based on meals
//when hover over picture, display ingrdients,
//be able to save preferred meal to storage
//function for each button = 