/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let expense = {};

  // Calculate total expenses by category
  for (let trans of transactions) {
    if (expense[trans.category]) {
      expense[trans.category] += trans.price;
    } else {
      expense[trans.category] = trans.price;
    }
  }

  // Convert expense object to the desired format
  let result = Object.keys(expense).map((category) => ({
    category: category,
    totalSpent: expense[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
