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



// Q-4

function checkWeather(degree) {

    if (degree >= 45) {
        return "Extreme Heat";
    }
    else if (degree >= 35) {
        return "Hot";
    }
    else if (degree >= 25) {
        return "Pleasant";
    }
    else {
        return "Cool";
    }
}

console.log(checkWeather(40));
//  Q-5
function checkSalary(salary) {

    if (salary >= 100000) {
        return "High Salary";
    }
    else if (salary >= 70000) {
        return "Good Salary";
    }
    else if (salary >= 40000) {
        return "Average Salary";
    }
    else {
        return "Low Salary";
    }
}

console.log(checkSalary(75000));


// Q-6

function createSchoolAdmissionSlip(
    studentName,
    fatherName,
    className,
    admissionDate,
    monthlyFee
) {

    studentName = studentName.trim();
    fatherName = fatherName.trim();
    className = className.trim();
    admissionDate = admissionDate.trim();

    let nameLower = studentName.toLowerCase();

    let nameUpper = nameLower.toUpperCase();

    let firstThreeLetters =
        nameLower.charAt(0) +
        nameLower.charAt(1) +
        nameLower.charAt(2);

    let rollDigits = "001";

    let studentID = firstThreeLetters
        .toUpperCase()
        .concat(rollDigits);

    let annualFee = monthlyFee * 12;

    let slip = "----- SCHOOL ADMISSION SLIP -----\n"
        .concat("Student Name: ", nameUpper, "\n")
        .concat("Father Name: ", fatherName, "\n")
        .concat("Class: ", className, "\n")
        .concat("Admission Date: ", admissionDate, "\n")
        .concat("Student ID: ", studentID, "\n")
        .concat("Monthly Fee: Rs. ", monthlyFee, "\n")
        .concat("Total Annual Fee: Rs. ", annualFee);

    return slip;
}

console.log(
    createSchoolAdmissionSlip(
        "  Zara Khan  ",
        "  Ahmed Khan  ",
        "BSIT",
        "27-09-2026",
        5000
    )
);
// Q-7

function calculateResult(marks1, marks2, marks3) {

    let total = marks1 + marks2 + marks3;

    let percentage = (total / 300) * 100;

    if (percentage >= 80) {
        return "A Grade";
    }
    else if (percentage >= 70) {
        return "B Grade";
    }
    else if (percentage >= 60) {
        return "C Grade";
    }
    else {
        return "Fail";
    }
}

let result = calculateResult(85, 90, 75);

console.log(result);

// Q-8

function checkStudentID(id) {

    id = String(id);

    if (id.length !== 7) {
        return "Invalid Student ID";
    }

    if (!id.startsWith("ST")) {
        return "Invalid Student ID";
    }

    for (let i = 2; i < id.length; i++) {

        if (id[i] < "0" || id[i] > "9") {
            return "Invalid Student ID";
        }
    }

    return "Valid Student ID";
}

console.log(checkStudentID("ST12345"));
console.log(checkStudentID("ST1234"));
console.log(checkStudentID("AB12345"));
console.log(checkStudentID("ST12A45"));

// Q-9

function checkSpeed(speed) {

    let count = 0;

    for (let i = 1; i <= 3; i++) {

        count++;

        if (speed > 60) {
            console.log("Speed is above 60");
        }
        else if (speed < 60) {
            console.log("Speed is below 60");
        }
        else {
            console.log("Speed is equal to 60");
        }
    }

    return "Speed checked " + count + " times";
}

console.log(checkSpeed(70));

// Q-10
function checkMobileNumber(number) {

    number = String(number);

    if (number.length !== 11) {
        return "Invalid Mobile Number";
    }

    if (!number.startsWith("03")) {
        return "Invalid Mobile Number";
    }

    for (let i = 0; i < number.length; i++) {

        if (number[i] < "0" || number[i] > "9") {
            return "Invalid Mobile Number";
        }
    }

    return "Valid Mobile Number";
}

console.log(checkMobileNumber("03123456789"));
console.log(checkMobileNumber("0312345678"));
console.log(checkMobileNumber("04123456789"));
console.log(checkMobileNumber("03A23456789"));

// Q-11
function cinemaTicketBilling(customerName, numberOfTickets, ticketPrice, customerType) {

    customerName = customerName.trim().toUpperCase();

    let totalCost = 0;

    for (let i = 1; i <= numberOfTickets; i++) {
        totalCost = totalCost + ticketPrice;
    }

    const calculateDiscount = (amount, percentage) => {
        return amount * percentage / 100;
    };

    let discountPercentage = 0;

    if (customerType.toLowerCase() === "student" && numberOfTickets >= 3) {
        discountPercentage = 20;
    }
    else if (customerType.toLowerCase() === "student") {
        discountPercentage = 10;
    }
    else if (customerType.toLowerCase() === "regular" && numberOfTickets >= 5) {
        discountPercentage = 15;
    }
    else if (customerType.toLowerCase() === "regular") {
        discountPercentage = 5;
    }

    let discount = calculateDiscount(totalCost, discountPercentage);

   let finalBill = totalCost - discount;

    finalBill = Math.round(finalBill);

    console.log("----- CINEMA TICKET BILL -----");
    console.log("Customer Name: " + customerName);
    console.log("Total Tickets: " + numberOfTickets);
    console.log("Total Cost: Rs. " + totalCost);
    console.log("Discount: Rs. " + discount);
    console.log("Final Payable Amount: Rs. " + finalBill);
}


cinemaTicketBilling("  Zara Khan  ", 4, 500, "student");
// Q-12
function smartDelivery(
    weight,
    distance,
    packageValue,
    weather,
    roadCondition,
    deliveryType,
    failedAttempts,
    customerPriority
) {

    let deliveryCost = 200;

    deliveryCost = deliveryCost + (distance * 20);

    if (weight > 5) {
        let extraWeight = weight - 5;
        deliveryCost = deliveryCost + (extraWeight * 100);
    }

    if (deliveryType.toLowerCase() === "express") {
        deliveryCost = deliveryCost + 500;
    }




    let risk = 0;

    if (weather.toLowerCase() === "rain") {
        risk = risk + 20;
    }
    else if (weather.toLowerCase() === "storm") {
        risk = risk + 40;
    }


    if (roadCondition.toLowerCase() === "bad") {
        risk = risk + 25;
    }


    if (packageValue > 100000) {
        risk = risk + 30;
    }


    risk = risk + (failedAttempts * 10);


    if (customerPriority.toLowerCase() === "vip") {
        risk = risk - 15;
    }


    if (distance > 100) {
        risk = risk + 20;
    }

    let decision;

    if (risk <= 30) {
        decision = "Safe Delivery";
    }
    else if (risk <= 60) {
        decision = "Careful Delivery";
    }
    else {
        decision = "High Risk Delivery";
    }




    let priority;

    if (
        customerPriority.toLowerCase() === "vip" &&
        packageValue > 100000
    ) {
        priority = "VIP Priority";
    }
    else {
        priority = "Normal Priority";
    }


    // -------------------------
    // 5. FINAL RESULT
    // -------------------------

    return {
        deliveryCost: deliveryCost,
        riskScore: risk,
        deliveryPriority: priority,
        finalDecision: decision
    };
}



let result = smartDelivery(
    8,          // weight
    120,        // distance
    150000,     // package value
    "rain",     // weather
    "bad",      // road
    "express",  // delivery type
    2,          // failed attempts
    "vip"       // customer priority
);

console.log(result);