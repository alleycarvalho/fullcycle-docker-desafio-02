const express = require("express")
const hoaxer = require('hoaxer')
const mysql = require("mysql")
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'password',
    database:'nodedb'
};
const connection = mysql.createConnection(config)

async function buildPeopleRepository() {
  const insertName = async (name) => {
    await query(`INSERT INTO people (name) VALUES ('${name}')`)
  }

  const listNames = async () => {
    const data = await query('SELECT name FROM people')

    return data.map(data => data.name)
  }

  const query = async (queryStr) => {
    return new Promise((resolve, reject) => {
      connection.query(queryStr, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      })
    })
  }

  return { insertName, listNames, query }
}

async function buildApp(repository) {
  const app = express()
    .get('/', async (_, res) => {
      const name = hoaxer.name.findName();
      await repository.insertName(name);

      const names = await repository.listNames()

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${names.map(name => (`<li>${name}</li>`)).join('\n')}
        </ul>
      `)
    })

  return app
}

buildPeopleRepository()
  .then(repo => buildApp(repo)
    .then(app => app.listen(port, () => {
      console.log(`Rodando na porta ${port}`)
    })))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
