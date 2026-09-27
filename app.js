// Q-1
function calculateTicketPrice(age) {
    let price = 500;

    if (age < 12) {
        price = price - (price * 50 / 100);
    } 
    else if (age >= 60) {
        price = price - (price * 30 / 100);
    }

    return price;
}

let age = prompt("Enter your age:");

let finalPrice = calculateTicketPrice(age);

console.log("Final ticket price: Rs. " + finalPrice);





// Q-2
function calculatePerformance(sales, target, rating) {

    let achievement = (sales / target) * 100;

    if (achievement >= 100 && rating >= 4) {
        return "Excellent Performance";
    }
    else if (achievement >= 80 && rating >= 3) {
        return "Good Performance";
    }
    else if (achievement >= 60 && rating >= 2) {
        return "Average Performance";
    }
    else {
        return "Poor Performance";
    }
}


// Q-3
function checkDiscount(amount) {

    if (amount >= 50000) {
        return "30% Discount";
    }
    else if (amount >= 30000) {
        return "20% Discount";
    }
    else if (amount >= 10000) {
        return "10% Discount";
    }
    else {
        return "No Discount";
    }
}

console.log(checkDiscount(55000));