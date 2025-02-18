// SECTION Global variables
const iceCreamItems = [
  {
    name: 'Vanilla',
    price: 1.00,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Cookie Dough',
    price: 2.00,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Mint Chocolate Chip',
    price: 2.25,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Chocolate',
    price: 1.50,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Caramel',
    price: 1.75,
    quantity: 0,
    type: 'scoop'
  },

  {
    name: 'Sprinkles',
    price: 0.25,
    quantity: 0,
    type: 'topping'
  },
  {
    name: 'Chocolate Chips',
    price: 0.25,
    quantity: 0,
    type: 'topping'
  },
  {
    name: 'Cookie Chunks',
    price: 0.50,
    quantity: 0,
    type: 'topping'
  }
]
// !SECTION

// SECTION Logic

function addItemToCart(i) {
  const itemToAdd = iceCreamItems[i]
  itemToAdd.quantity++

  drawCart()
}

function calculateOrderTotal() {

  let orderTotal = 0

  for (let i = 0; i < iceCreamItems.length; i++) {
    const iceCreamItem = iceCreamItems[i];
    orderTotal += iceCreamItem.quantity * iceCreamItem.price
  }

  return orderTotal
}

// !SECTION

// SECTION Draw / Update

function drawCart() {
  let itemString = ''


  for (let i = 0; i < iceCreamItems.length; i++) {
    const iceCreamItem = iceCreamItems[i];

    if (iceCreamItem.quantity > 0) {
      itemString += `<tr><th scope="row">${iceCreamItem.name}</th><td>${iceCreamItem.quantity}</td><td>$${iceCreamItem.price.toFixed(2)}</td><td>$${iceCreamItem.price * iceCreamItem.quantity}</td></tr>`
    }
  }
  cartSelectElem = document.getElementById('tableElem')
  cartSelectElem.innerHTML = itemString

}

// !SECTION
