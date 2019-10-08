import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`chasing the cta app available on http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
