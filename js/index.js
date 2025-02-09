// ITERATION 1

function updateSubtotal(product) {
  
  let unitPrice = product.querySelector(".price span");
  let numberOfUnitPrice = unitPrice.innerHTML;
  let quantity = product.querySelector(".quantity input");
  let numberOfQuantity = quantity.value;
  let sum = parseInt(numberOfUnitPrice) *  parseInt(numberOfQuantity);
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = sum;
  return sum;
  //console.log(subtotalNumber);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2 + // ITERATION 3
  let sum = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(element => {
    sum += updateSubtotal(element);
  });
  let total = document.querySelector("#total-value span");
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
