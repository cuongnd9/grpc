const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'ec2-174-129-33-139.compute-1.amazonaws.com',
      user: 'ofxijmmwyhmveh',
      password: '8f14d081b3c01259a61f0b5eb606d28b726e2c959967483a1e0b2198e5ad467e',
      port: '5432',
      database: 'd944eiog9a5a8j',
      ssl: true
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
}
