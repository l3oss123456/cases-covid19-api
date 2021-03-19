"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaDecorator = require("koa-decorator");

var R = _interopRequireWildcard(require("ramda"));

var _index = require("../../domains/covid19/index");

var _domains = require("../../utils/domains");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var covid19 = (_dec = (0, _koaDecorator.route)("/covid19"), _dec2 = (0, _koaDecorator.route)("/USA", _koaDecorator.HttpMethod.GET), _dec3 = (0, _koaDecorator.route)("/Spain", _koaDecorator.HttpMethod.GET), _dec4 = (0, _koaDecorator.route)("/Italy", _koaDecorator.HttpMethod.GET), _dec5 = (0, _koaDecorator.route)("/Germany", _koaDecorator.HttpMethod.GET), _dec6 = (0, _koaDecorator.route)("/France", _koaDecorator.HttpMethod.GET), _dec7 = (0, _koaDecorator.route)("/UK", _koaDecorator.HttpMethod.GET), _dec8 = (0, _koaDecorator.route)("/Russia", _koaDecorator.HttpMethod.GET), _dec9 = (0, _koaDecorator.route)("/Belgium", _koaDecorator.HttpMethod.GET), _dec10 = (0, _koaDecorator.route)("/Netherlands", _koaDecorator.HttpMethod.GET), _dec11 = (0, _koaDecorator.route)("/Brazil", _koaDecorator.HttpMethod.GET), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function covid19() {
    _classCallCheck(this, covid19);
  }

  _createClass(covid19, [{
    key: "getCovid19_USA",
    value: // @route("/", HttpMethod.GET)
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
    function () {
      var _getCovid19_USA = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context.next = 4;
                return (0, _index.list_covid19_USA)(lastdays);

              case 4:
                resp = _context.sent;
                // broadcastData(resp.data)
                // console.log("resp;", resp.data)
                // console.log("ctx.query;", lastdays)
                // console.log("ctx.headers;", ctx.headers)
                // console.log(" ctx.params;", ctx.params)
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCovid19_USA(_x) {
        return _getCovid19_USA.apply(this, arguments);
      }

      return getCovid19_USA;
    }()
  }, {
    key: "getCovid19_Spain",
    value: function () {
      var _getCovid19_Spain = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context2.next = 4;
                return (0, _index.list_covid19_Spain)(lastdays);

              case 4:
                resp = _context2.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCovid19_Spain(_x2) {
        return _getCovid19_Spain.apply(this, arguments);
      }

      return getCovid19_Spain;
    }()
  }, {
    key: "getCovid19_Italy",
    value: function () {
      var _getCovid19_Italy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context3.next = 4;
                return (0, _index.list_covid19_Italy)(lastdays);

              case 4:
                resp = _context3.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getCovid19_Italy(_x3) {
        return _getCovid19_Italy.apply(this, arguments);
      }

      return getCovid19_Italy;
    }()
  }, {
    key: "getCovid19_Germany",
    value: function () {
      var _getCovid19_Germany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context4.next = 4;
                return (0, _index.list_covid19_Germany)(lastdays);

              case 4:
                resp = _context4.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getCovid19_Germany(_x4) {
        return _getCovid19_Germany.apply(this, arguments);
      }

      return getCovid19_Germany;
    }()
  }, {
    key: "getCovid19_France",
    value: function () {
      var _getCovid19_France = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context5.next = 4;
                return (0, _index.list_covid19_France)(lastdays);

              case 4:
                resp = _context5.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getCovid19_France(_x5) {
        return _getCovid19_France.apply(this, arguments);
      }

      return getCovid19_France;
    }()
  }, {
    key: "getCovid19_UK",
    value: function () {
      var _getCovid19_UK = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context6.next = 4;
                return (0, _index.list_covid19_UK)(lastdays);

              case 4:
                resp = _context6.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getCovid19_UK(_x6) {
        return _getCovid19_UK.apply(this, arguments);
      }

      return getCovid19_UK;
    }()
  }, {
    key: "getCovid19_Russia",
    value: function () {
      var _getCovid19_Russia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context7.next = 4;
                return (0, _index.list_covid19_Russia)(lastdays);

              case 4:
                resp = _context7.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getCovid19_Russia(_x7) {
        return _getCovid19_Russia.apply(this, arguments);
      }

      return getCovid19_Russia;
    }()
  }, {
    key: "getCovid19_Belgium",
    value: function () {
      var _getCovid19_Belgium = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context8.next = 4;
                return (0, _index.list_covid19_Belgium)(lastdays);

              case 4:
                resp = _context8.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getCovid19_Belgium(_x8) {
        return _getCovid19_Belgium.apply(this, arguments);
      }

      return getCovid19_Belgium;
    }()
  }, {
    key: "getCovid19_Netherlands",
    value: function () {
      var _getCovid19_Netherlands = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context9.next = 4;
                return (0, _index.list_covid19_Netherlands)(lastdays);

              case 4:
                resp = _context9.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getCovid19_Netherlands(_x9) {
        return _getCovid19_Netherlands.apply(this, arguments);
      }

      return getCovid19_Netherlands;
    }()
  }, {
    key: "getCovid19_Brazil",
    value: function () {
      var _getCovid19_Brazil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(ctx) {
        var lastdays, resp;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                lastdays = ctx.query.lastdays;
                lastdays = !R.isNil(lastdays) || !R.isEmpty(lastdays) ? lastdays : 30;
                _context10.next = 4;
                return (0, _index.list_covid19_Brazil)(lastdays);

              case 4:
                resp = _context10.sent;
                ctx.body = resp.data;

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getCovid19_Brazil(_x10) {
        return _getCovid19_Brazil.apply(this, arguments);
      }

      return getCovid19_Brazil;
    }()
  }]);

  return covid19;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getCovid19_USA", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_USA"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Spain", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Spain"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Italy", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Italy"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Germany", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Germany"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_France", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_France"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_UK", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_UK"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Russia", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Russia"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Belgium", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Belgium"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Netherlands", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Netherlands"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getCovid19_Brazil", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "getCovid19_Brazil"), _class2.prototype)), _class2)) || _class);
var _default = covid19;
exports["default"] = _default;
//# sourceMappingURL=covid19.controller.js.map