"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _koaDecorator = require("koa-decorator");

var _path = _interopRequireDefault(require("path"));

var _domains = require("./utils/domains");

var _index = require("./domains/covid19/index");

var _index2 = _interopRequireDefault(require("./config/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = new _koa["default"]();
app.use((0, _koaBodyparser["default"])());
app.use((0, _cors["default"])()); // const apiRouter = load(path.resolve(__dirname, "controllers"), ".controller.js")
// app.use(apiRouter.routes())

var server = app.listen(_index2["default"].PORT, function () {
  console.log("Server is running on port : ".concat(_index2["default"].PORT));
});
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}; // mongoose.connect("mongodb://localhost:27017/covid19", options)
// mongoose.connect("cluster0-shard-00-00.yyndl.mongodb.net:27017", options)

var country = ["USA", "Spain", "Italy", "Germany", "France", "UK", "Russia", "Belgium", "Netherlands", "Brazil"];
var lastdays = 1;
setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var resp;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _index.list_covid19_all_country)(country, lastdays);

        case 2:
          resp = _context.sent;
          (0, _domains.broadcastData)(resp);
          lastdays = lastdays + 1;

          if (lastdays > 30) {
            lastdays = 1;
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), 3000); // test()
// async function test() {
//   const resp = await list_covid19_all_country(country, lastdays)
//   broadcastData(resp)
//   lastdays = lastdays + 1
//   if (lastdays > 30) {
//     lastdays = 1
//   }
// }

var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map