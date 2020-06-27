require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5ef3d0f6f784f0befbb4e403', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});