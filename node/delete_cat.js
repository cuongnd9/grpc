const client = require('./client');

const deletedId = '80f6563e-a26e-4270-afc2-af09986280c2';

client.delete(deletedId, (err, id) => {
  if (!err) {
    console.log('Deleted ID....', id);
  } else {
    console.log(err);
  }
});
