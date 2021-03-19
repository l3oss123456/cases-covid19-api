import mongoose from "mongoose"
import ThrowError from "../errors/basic"
import * as R from "ramda"
import wss from "./websocket"

export const findAndUpdateOrCreate = async (repo, filter, data) => {
  let obj = await repo.findOne(filter)
  if (obj) {
    obj = await repo.update(filter, data)
  } else {
    obj = await repo.create(data)
  }
  return obj
}
export const findOrCreate = async (repo, filter, data) => {
  let obj = await repo.findOne(filter)
  if (!obj) {
    obj = await repo.create(data)
  }
  return obj
}

export const findOneIfAlreadyExistThrowError = async (repo, filter) => {
  const obj = await repo.findOne(filter)
  if (obj) throw ThrowError.ALREADY_EXIST({ model: repo.model.modelName, ...filter })
  return obj
}

export const findOneIfNotExistThrowError = async (repo, filter) => {
  const obj = await repo.findOne(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const findOneOrFindAll = async (repo, filter) => {
  const obj = await repo.find(filter)
  return obj
}

export const checkUpdate = async (repo, filter, data) => {
  const obj = await repo.update(filter, data, { new: true })
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const checkDelete = async (repo, filter) => {
  const obj = await repo.deleteOne(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const broadcastData = (data) => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(data))
  })
  // wss.on("connection", (ws) => {
  //   // สร้าง connection

  //   ws.on("message", (message) => {
  //     // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
  //   })

  //   ws.on("close", () => {
  //     // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
  //     ws.send("websocket disconnected !")
  //   })

  //   // ws.send("websocket connected !")
  //   if (!R.isNil(data) && !R.isEmpty(data)) {
  //     // console.log("data;", data)
  //     ws.send(JSON.stringify(data))
  //   }
  // })
}
