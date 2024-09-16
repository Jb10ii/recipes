const food = [] 

for (let i = 0; i < 3; i++) {
    food.push(prompt(`Enter the name of your recipe ${i+1}`))
    food.push(prompt(`Enter the name of your ingredients ${i+1}`))
    food.push(prompt(`Enter the name of your instructions ${i+1}`))
    
}

console.log(food);
