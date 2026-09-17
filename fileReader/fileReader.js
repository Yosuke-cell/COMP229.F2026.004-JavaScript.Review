const filename = require('fs');

filename.readFile('LICENSE', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});