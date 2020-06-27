require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ef682819cb02849e6830d02').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});