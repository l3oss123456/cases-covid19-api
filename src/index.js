import Koa from "koa"
import bodyParser from "koa-bodyparser"
import cors from "@koa/cors"
import mongoose from "mongoose"
import { load } from "koa-decorator"
import path from "path"
import { broadcastData } from "./utils/domains"
import { list_covid19_all_country } from "./domains/covid19/index"

import config from "./config/index"

const app = new Koa()
app.use(bodyParser())
app.use(cors())

const apiRouter = load(path.resolve(__dirname, "controllers"), ".controller.js")
app.use(apiRouter.routes())

const server = app.listen(config.PORT, () => {
  console.log(`Server is running on port : ${config.PORT}`)
})

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
// mongoose.connect("mongodb://localhost:27017/covid19", options)
// mongoose.connect("cluster0-shard-00-00.yyndl.mongodb.net:27017", options)

const country = [
  "USA",
  "Spain",
  "Italy",
  "Germany",
  "France",
  "UK",
  "Russia",
  "Belgium",
  "Netherlands",
  "Brazil",
]
let lastdays = 1
setInterval(async () => {
  const resp = await list_covid19_all_country(country, lastdays)
  broadcastData(resp)
  lastdays = lastdays + 1
  if (lastdays > 30) {
    lastdays = 1
  }
}, 3000)

export default server
