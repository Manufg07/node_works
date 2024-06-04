const items = new Map();

function addExpense(id, name, item, amount) {
    if (expenses.has(id)) {
      console.log(`error: expense with id ${id} already exists.`);
    } else {
      expenses.set(id, { name, item, amount });
      console.log(`expense added with id ${id}.`);
    }
  }

addExpense(1,'manu','Book',200,)
addExpense(2,'sujin','Milk',80,)
addExpense(2,'rahul','Orange',30,)
addExpense(3,'aswin','soap',500,)