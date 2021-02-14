// Script.js
localStorage = window.localStorage;
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products').then(response => response.json()).then(function(response){ if(!localStorage
  .getItem('session')){
    localStorage.setItem('session', JSON.stringify(response))}
 
    for(i=0; i<response.length; i++){
      let element = document.createElement('product-item')  ;
      element.setAttribute('id', response[i].id);
      element.setAttribute('src', response[i].image);
      element.setAttribute('price', response[i].price);
      element.setAttribute('title', response[i].title);
      document.getElementById('product-list').appendChild(element);
    }
  });
});