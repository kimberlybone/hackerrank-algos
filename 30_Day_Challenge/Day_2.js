function solve(meal_cost, tipPercent, taxPercent) {
    let tip = meal_cost * tipPercent/100
    let tax = meal_cost * taxPercent/100
    return Math.round(meal_cost + tip + tax)
}
