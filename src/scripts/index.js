import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/mobile.css';
import jsonData from '../DATA.json';

const renderRestaurants = (restaurants) => {
    const dataList = restaurants
        .map((data) => `
      <div class="list_item">
        <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="list_item_content">
          <p class="list_item_rating">
            Rating : 
            <a href="#" class="list_item_rating_value">${data.rating}</a>
          </p>
          <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
          <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
        </div>
      </div>
    `)
        .join('');

    document.querySelector('#tes').innerHTML = dataList;
};

const toggleDrawer = () => {
    const drawer = document.querySelector('#drawer');
    drawer.classList.toggle('open');
};

document.addEventListener('DOMContentLoaded', () => {
    const restaurants = jsonData.restaurants;
    renderRestaurants(restaurants);
});

document.querySelector('#menu').addEventListener('click', (event) => {
    toggleDrawer();
    event.stopPropagation();
});

document.querySelector('.hero').addEventListener('click', () => {
    toggleDrawer();
});

document.querySelector('main').addEventListener('click', () => {
    toggleDrawer();
});