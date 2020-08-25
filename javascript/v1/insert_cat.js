const client = require('./client');

const newCat = {
  name: 'Zippy',
  color: 'white & black',
  image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
}

client.insert(newCat, (err, cat) => {
  if (!err) {
    console.log('create a new cat.............', cat);
  } else {
    console.error(err);
  }
})
