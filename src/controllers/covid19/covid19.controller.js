import { HttpMethod, route } from "koa-decorator"
import * as R from "ramda"
import {
  list_covid19_all_country,
  list_covid19_USA,
  list_covid19_Spain,
  list_covid19_Italy,
  list_covid19_Germany,
  list_covid19_France,
  list_covid19_UK,
  list_covid19_Russia,
  list_covid19_Belgium,
  list_covid19_Netherlands,
  list_covid19_Brazil,
} from "../../domains/covid19/index"
import { broadcastData } from "../../utils/domains"

@route("/covid19")
class covid19 {
  // @route("/", HttpMethod.GET)
  // async getCovid19(ctx) {
  //   let { lastdays } = ctx.query
  //   lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
  //   const country = [
  //     "USA",
  //     "Spain",
  //     "Italy",
  //     "Germany",
  //     "France",
  //     "UK",
  //     "Russia",
  //     "Belgium",
  //     "Netherlands",
  //     "Brazil",
  //   ]
  //   console.log("lastdays;", lastdays)
  //   const resp = await list_covid19_all_country(country, lastdays)
  //   // console.log("resp", resp.data)
  //   broadcastData(resp)
  //   // console.log("resp;", resp.data)
  //   // console.log("ctx.query;", lastdays)
  //   // console.log("ctx.headers;", ctx.headers)
  //   // console.log(" ctx.params;", ctx.params)
  //   ctx.body = resp
  // }

  @route("/USA", HttpMethod.GET)
  async getCovid19_USA(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_USA(lastdays)
    // broadcastData(resp.data)
    // console.log("resp;", resp.data)
    // console.log("ctx.query;", lastdays)
    // console.log("ctx.headers;", ctx.headers)
    // console.log(" ctx.params;", ctx.params)
    ctx.body = resp.data
  }

  @route("/Spain", HttpMethod.GET)
  async getCovid19_Spain(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Spain(lastdays)
    ctx.body = resp.data
  }

  @route("/Italy", HttpMethod.GET)
  async getCovid19_Italy(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Italy(lastdays)
    ctx.body = resp.data
  }

  @route("/Germany", HttpMethod.GET)
  async getCovid19_Germany(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Germany(lastdays)
    ctx.body = resp.data
  }

  @route("/France", HttpMethod.GET)
  async getCovid19_France(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_France(lastdays)
    ctx.body = resp.data
  }

  @route("/UK", HttpMethod.GET)
  async getCovid19_UK(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_UK(lastdays)
    ctx.body = resp.data
  }

  @route("/Russia", HttpMethod.GET)
  async getCovid19_Russia(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Russia(lastdays)
    ctx.body = resp.data
  }

  @route("/Belgium", HttpMethod.GET)
  async getCovid19_Belgium(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Belgium(lastdays)
    ctx.body = resp.data
  }

  @route("/Netherlands", HttpMethod.GET)
  async getCovid19_Netherlands(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Netherlands(lastdays)
    ctx.body = resp.data
  }

  @route("/Brazil", HttpMethod.GET)
  async getCovid19_Brazil(ctx) {
    let { lastdays } = ctx.query
    lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30
    const resp = await list_covid19_Brazil(lastdays)
    ctx.body = resp.data
  }
}
export default covid19
