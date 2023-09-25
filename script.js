const foodchart = require('./food.json')

function allfooditems(details)
{return details.map(item => item.foodname) }
console.log("All the food items :"
,allfooditems(foodchart));
 
function vegetable(details)
{
    return details.filter(item => item.category==="Vegetable")
}
console.log("All the food items with category vegetables : ",vegetable(foodchart));

function fruit(details)
{
    return details.filter(item => item.category==="Fruit")
}
console.log("All the food items with category fruit : ",fruit(foodchart));

function protiens(details)
{
    return details.filter(item => item.category==="protiens")
}
console.log("All the food items with category protien : ",protiens(foodchart));
function nuts(details)
{
    return details.filter(item => item.category==="Nuts")
}
console.log("All the food items with category nuts : ",nuts(foodchart));
function grains(details)
{
    return details.filter(item => item.category==="Grain")
}
console.log("All the food items with category grain : ",grains(foodchart));
function dairy(details)
{
    return details.filter(item => item.category==="Dairy")
}
console.log("All the food items with category dairy : ",dairy(foodchart));


function calorieabove100(details)
{
    return details.filter(item => item.calorie > 100)
}
console.log("Food items above calorie 100 : ",calorieabove100(foodchart));

function caloriebelow100(details)
{
    return details.filter(item => item.calorie < 100)
}
console.log("Food items below calorie 100 : ",caloriebelow100(foodchart));

function protienhightolow(details)
{
    return details.sort((a,b)=>{return b.protiens-a.protiens})
}
console.log(" all the food items with highest protien content to lowest : ",protienhightolow(foodchart));
function carbohydrateslowtohigh(details)
{
    return details.sort((a,b)=>{return a.cab-b.cab})
}
console.log(" all the food items with lowest cab content to highest: ",carbohydrateslowtohigh(foodchart));
