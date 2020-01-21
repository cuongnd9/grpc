const client = require('./client');

const updatedCat = {
  id: '80f6563e-a26e-4270-afc2-af09986280d1',
  name: 'Zippy',
  color: 'white & black',
  image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
}

client.update(updatedCat, (err, cat) => {
  if (!err) {
    console.log('updated cat......', cat);
  } else {
    console.log(err)
  }
})
