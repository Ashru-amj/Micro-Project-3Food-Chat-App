
const foods = [
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
    {
      "id": 17,
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
  ];
  
  // Task 1: List all food items
  const allFoodItems = foods.map(food => food.foodname);
  document.getElementById("root1").innerHTML = "All food items are : " + allFoodItems;
  
  // Task 2: List all food items with category 'Vegetable'
  
  const vegetables = foods.filter(food => food.category === "Vegetable");
  const vegetableNames = vegetables.map(vegetable => vegetable.foodname).join(', ');
  document.getElementById("root2").innerHTML = "The vegetable catagories are :  " + vegetableNames;
  
  // Task 3: List all food items with category 'Fruit'
  const fruits = foods.filter(food => food.category === "Fruit");
  document.getElementById("root3").innerHTML = "For this food catagories of fruits are : " + fruits.map(fruit => fruit.foodname).join(', ');
  
  // Task 4: List all food items with category 'Protein'
  const proteins = foods.filter(food => food.category === "Protein");
  document.getElementById("root4").innerHTML = "In food items with category Protein are : " + proteins.map(protein => protein.foodname).join(', ');
  
  // Task 5: List all food items with category 'Nuts'
  const nuts = foods.filter(food => food.category === "Nuts");
  const nutNames = nuts.map(nut => nut.foodname).join(', ');
  document.getElementById("root5").innerHTML = "In food items with category Nuts are :  " + nutNames;
  
  
  // Task 6: List all food items with category 'Grain'
  const grains = foods.filter(food => food.category === "Grain");
  const grainNames = grains.map(grain => grain.foodname).join(', ');
  document.getElementById("root6").innerHTML = "In food items with category Grains are :  " + grainNames;
  
  
  // Task 7: List all food items with category 'Dairy'
  const dairy = foods.filter(food => food.category === "Dairy");
  const dairyNames = dairy.map(d => d.foodname).join(', ');
  document.getElementById("root7").innerHTML = "Food items with category Dairy are :  " + dairyNames;
  
  // Task 8: List all food items with calorie above 100  
  const above100Calories = foods.filter(food => food.calorie > 100);
  const above100CalorieNames = above100Calories.map(food => food.foodname).join(', ');
  document.getElementById("root8").innerHTML = "Food Items with Calorie above 100 are :  " + above100CalorieNames;
  
  
  // Task 9: List all food items with calorie below 100
  const below100Calories = foods.filter(food => food.calorie < 100);
  const below100CalorieNames = below100Calories.map(food => food.foodname).join(', ');
  document.getElementById("root9").innerHTML = "Food Items with Calorie below 100 are :  " + below100CalorieNames;
  
  // Task 10: List all food items with highest protein content to lowest
  const highestToLowestProtein = foods.slice().sort((a, b) => b.protiens - a.protiens);
  const highestProteinNames = highestToLowestProtein.map(food => food.foodname).join(', ');
  document.getElementById("root10").innerHTML = "Food Items with Highest to Lowest Protein Content are :  " + highestProteinNames;
  
  // Task 11: List all food items with lowest carb content to highest
  const lowestToHighestCarb = foods.slice().sort((a, b) => a.cab - b.cab);
  const lowestCarbNames = lowestToHighestCarb.map(food => food.foodname).join(', ');
  document.getElementById("root11").innerHTML = "Food Items with Lowest to Highest Carb Content are :  " +  lowestCarbNames;