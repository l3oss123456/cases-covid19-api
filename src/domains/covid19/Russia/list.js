import axios from "../../../utils/axios"

export default async function list_covid19_Russia(lastdays) {
  try {
    const resp = await axios(`GET`, `/Russia?lastdays=${lastdays}`)
    return resp
  } catch (error) {
    console.log("error from list_covid19_US", error)
    return error
  }
}
