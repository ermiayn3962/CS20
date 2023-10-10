/* Checkout Menu Scripts */
function openCheckout() {
    document.getElementById('checkout').classList.toggle("active");
}

function closeCheckout() {
    document.getElementById("checkout").classList.remove("active");
}

/* How much of an Item */
var numDogs = 0;
var numFries = 0;
var numSoda = 0;
function askHotdogQuantity() {
    numDogs = parseInt(prompt("How many hot dogs?: "))
    return numDogs;
    alert(quantity_hotDogs);
}

function askFriesQuantity() {
    numFries = parseInt(prompt("How many fries?: "))
    return numFries
    alert(numFries);
}


function askSodaQuantity() {
    numSoda = parseInt(prompt("How many sodas?: "))
    return numSoda
    alert(numSoda);
}


/* Calculating the price of each item */
var priceDogs = 0;
var priceFries = 0;
var priceSoda = 0;

function getPrice(item, quantity) {
    if (item == "hotdog") {
        priceDogs = quantity * 3.75
        return priceDogs
    } else if (item == "soda") {
        priceSoda = quantity * 2.50;
        return priceSoda
    } else if (item == "fries") {
        
        priceFries = quantity * 3.00
        return priceFries
    }
}

/* Rounding function */
function roundPrice(number) {
    const factor = 10 ** 2;
    const roundedNumber = Math.round(number * factor) / factor;
    var myformat = new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 2 
    });
    return myformat.format(roundedNumber);
}

/* Getting Subtotal */
function getSubtotal() {
    subtotal = roundPrice(priceDogs + priceFries + priceSoda);
    return subtotal;
}

const cart = document.querySelector("div.cart");
cart.addEventListener('click', function() {
    var subtotal = getSubtotal();
    var discount = 0;
    var tax = 0;

    if (subtotal > 25){
        discount = roundPrice(getSubtotal() * 0.10)
        document.getElementById('discount').innerHTML = "Discount (10% Off): $" + discount

    } else {
        document.getElementById('discount').innerHTML = "Discount: None"
        
    }
    subtotal = subtotal - discount
    tax = roundPrice(subtotal * 0.0625)
    document.getElementById('numHotdog').innerHTML = numDogs
    document.getElementById('numFries').innerHTML = numFries
    document.getElementById('numSoda').innerHTML = numSoda
    document.getElementById('subtotal').innerHTML = "Subtotal (Before Discount): $" + getSubtotal()
    document.getElementById('subtotalDiscount').innerHTML = "Subtotal (After Discount): $" + roundPrice(subtotal)
    document.getElementById('tax').innerHTML = tax
    document.getElementById('total').innerHTML = roundPrice(parseFloat(tax) + parseFloat(subtotal))
    
});

