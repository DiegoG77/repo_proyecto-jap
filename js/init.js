const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
//--------------------------------------------------------------------2-productos------//
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
//-------------------------------------------------------------------------------------//
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
  let userLogged = localStorage.getItem('User-Logged');
  let infoUser = document.getElementById("info-user");
  let user = document.getElementById("user");

  if (userLogged) {
    userLogged = JSON.parse(userLogged);
    user.innerText = user.innerText + 'Usuario: ' + userLogged.email;
    //----------------------------------------
    infoUser.style = "visibility: visible";
    //----------------------------------------
  }
  //---------------------------------------------------------------------------
  document.getElementById("salir").addEventListener("click", function () {
    localStorage.removeItem('User-Logged');
    //window.location = 'index.html';
  })
  //---------------------------------------------------------------------------  
});


document.addEventListener("DOMContentLoaded", function (e) {
  let userLoggedG = localStorage.getItem('Email');
  let infoG = document.getElementById('info-google-user');
  let userG = document.getElementById('user-google');

  if (localStorage.getItem('Name') != undefined || sessionStorage.getItem('Name') != null) {
    userG.innerText = userG.innerText + 'Usuario: ' + userLoggedG;
    //-------------------------------------
    infoG.style = "visibility: visible";
    //-------------------------------------
  }
  //document.getElementById("salir").addEventListener("click", function () {
    //alert("prueba");
    //window.location = 'index.html';
    
  //})

});
