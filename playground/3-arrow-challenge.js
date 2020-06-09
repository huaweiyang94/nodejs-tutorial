//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() { // must use traditional function definition (using arrow function will bind this to {})
        return this.tasks.filter((task) => !task.completed); // must use arrow function (using traditional function will bind this to global)
    }
}

console.log(tasks.getTasksToDo())