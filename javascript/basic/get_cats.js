const client = require('./client');

client.list({}, (err, cats) => {
  if (!err) {
    console.log('get cat list.............', cats);
  } else {
    console.error(err);
  }
});
