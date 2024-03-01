import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { AppDataSource } from './data-source'
import { User } from './entity/User'
import type { Response, Request } from 'express'

dotenv.config()

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/user', async (req: Request, res: Response) => {
  try {
    console.log(req.body)

    const user = new User()
    console.log(user)

    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.age = req.body.age
    console.log(user)

    await AppDataSource.manager.save(user)
    console.log(user)

    res.status(200).json(`{"msg": "Saved a new user with id: ${user.id}"}`)
  } catch {
    res.status(400).json('failed')
  }
})
;(async () => {
  await AppDataSource.initialize()
  app.listen(process.env.PORT, () => {
    console.log('Express server listening on Port ', process.env.PORT)
  })
})()

// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
