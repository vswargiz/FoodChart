const body = document.querySelector("body");
const div = document.querySelector("div");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const  ulFoodItem  = document.querySelector("[data-FoodItems]");
const  ulvegetablesItem  = document.querySelector("[data-FoodVegetable]");
const  ulFruitItem  = document.querySelector("[data-Foodfruit]");
const  ulProtienItem  = document.querySelector("[data-FoodProtien]");
const  ulNutsItem  = document.querySelector("[data-FoodNuts]");
const  ulgrainsItem  = document.querySelector("[data-Foodgrains]");
const  uldairyItem  = document.querySelector("[data-Fooddairy]");
const ulCaloriesabove100 = document.querySelector("[data-FoodcaloriesAbove100]");
const ulCaloriesbelow100 = document.querySelector("[ data-Foodcaloriesbelow100]");
const ulHeighesttoLowest = document.querySelector("[data-HeighesttoLowest]");
const ulLowesttoHeighest = document.querySelector("[data-LowesttoHeighest]");
var FoodDataSet = [
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
]

//--------------------------------------------------------------------------------------------------------------------------------------------

// Q.1 list all the food items

function ListItems(FoodDataSet){
    for(var value of FoodDataSet){
        // console.log(value.foodname);
        let liFoodItem  = document.createElement('li'); //<li></li>
        liFoodItem.innerText = value.foodname;
        ulFoodItem.appendChild(liFoodItem)

    }

}
ListItems(FoodDataSet);







// --------------------------------------------------------------------------------------------------------------

// Q.2 list all the food items with category vegetables


let categoryVegetables = FoodDataSet.filter(Vegetablesitem => Vegetablesitem.category ==  "Vegetable");
// console.log(categoryVegetables);

for(let value of categoryVegetables){
  // console.log(value.foodname);
  let livegetablesItem  = document.createElement('li');
  livegetablesItem.innerText = value.foodname;
  ulvegetablesItem.appendChild(livegetablesItem);
}

// ----------------------------------------------------------------------------------------------------------------

// Q.3 list all the food items with category fruit

let categoryFruit = FoodDataSet.filter(categoryFruititem => categoryFruititem.category ==  "Fruit");

console.log(categoryFruit);

for(let value of categoryFruit){
  console.log(value.foodname);
  let livegetFruit  = document.createElement('li');
  livegetFruit.innerText = value.foodname;
  ulFruitItem.appendChild(livegetFruit);
}

// ----------------------------------------------------------------------------------------------------------------------

// Q.4 list all the food items with category protien

let categoryProtine = FoodDataSet.filter(protiensitem => protiensitem.category == "Protein");

console.log(categoryProtine);

for (let value of categoryProtine ){
  console.log(value.foodname);
  let livegetProtien = document.createElement("li");
  livegetProtien.innerText = value.foodname;
  ulProtienItem.appendChild(livegetProtien);

}

// ------------------------------------------------------------------------------------------------------------------------

// Q.5  list all the food items with category nuts

let categoryNuts =  FoodDataSet.filter(nutsitem => nutsitem.category == "Nuts");
console.log(categoryNuts);

for(let value of categoryNuts){
  console.log(value.foodname);
  let liveNuts = document.createElement('li');
  liveNuts.innerText = value.foodname;
  ulNutsItem.appendChild(liveNuts);

}


//-------------------------------------------------------------------------------------------------------------------------

// Q.6 list all the food items with category grains

let categorygrains = FoodDataSet.filter(grainsitem => grainsitem.category == "Grain");
console.log(categorygrains);

for(let value of categorygrains){
  console.log(value.foodname);
  let liveGrains = document.createElement("li");
  liveGrains.innerText = value.foodname;
  ulgrainsItem.appendChild(liveGrains);

}

//-----------------------------------------------------------------------------------------------------------------------

// Q.7 list all the food items with category dairy

let categoryDairy = FoodDataSet.filter(Dairyitem => Dairyitem.category == "Dairy");
console.log(categoryDairy);

for(let value of categoryDairy){
  console.log(value.foodname);
  let liveDairy = document.createElement("li");
  liveDairy.innerText=value.foodname;
  uldairyItem.appendChild(liveDairy);

}

//------------------------------------------------------------------------------------------------------------------------

// Q.8 list all the food items with calorie above 100

let FoodItemsWithCalorieAbove100 = FoodDataSet.filter(CalorieAbove100 => CalorieAbove100.calorie > 100);
console.log(FoodItemsWithCalorieAbove100);

for(let value of FoodItemsWithCalorieAbove100 ){
  console.log(value.foodname);
  let liveAbove100 = document.createElement("li");
  liveAbove100.innerHTML = value.foodname;
  ulCaloriesabove100.appendChild(liveAbove100);

}

//------------------------------------------------------------------------------------------------------------------------

// Q.9 list all the food items with calorie below 100

let FoodItemsWithCalorieBelow100 = FoodDataSet.filter(CalorieBelow100 => CalorieBelow100.calorie < 100);
console.log(FoodItemsWithCalorieBelow100);

for (let value of FoodItemsWithCalorieBelow100 ){
  console.log(value.foodname);
  let liveBelow100 = document.createElement("li");
  liveBelow100.innerText = value.foodname;
  ulCaloriesbelow100.appendChild(liveBelow100);

}


// -----------------------------------------------------------------------------------------------------------------------

// Q.10 list all the food items with highest protien content to lowest

let  HighestProtienContentToLowest =  FoodDataSet.sort((a, b) =>  b.protiens - a.protiens );
console.log(HighestProtienContentToLowest);

for(let value of HighestProtienContentToLowest ){
  console.log(value.foodname);
  let liveHighesttoLow = document.createElement("li");
  liveHighesttoLow.innerText = value.foodname;
  ulHeighesttoLowest.appendChild(liveHighesttoLow);

}

//------------------------------------------------------------------------------------------------------------------------

// Q.11 list all the food items with lowest cab content to highest

let  FoodItemsWithLowestCabContentToHighest = FoodDataSet.sort((a,b) => a.cab - b.cab );

console.log(FoodItemsWithLowestCabContentToHighest);

for(let value of FoodItemsWithLowestCabContentToHighest ){
  console.log(value.foodname);
  let liveLowesttoHeighest = document.createElement("li");
  liveLowesttoHeighest.innerText = value.foodname;
  ulLowesttoHeighest.appendChild(liveLowesttoHeighest);

}