"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = list_covid19_France;

var _axios = _interopRequireDefault(require("../../../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function list_covid19_France(_x) {
  return _list_covid19_France.apply(this, arguments);
}

function _list_covid19_France() {
  _list_covid19_France = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lastdays) {
    var resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios["default"])("GET", "/France?lastdays=".concat(lastdays));

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("error from list_covid19_US", _context.t0);
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _list_covid19_France.apply(this, arguments);
}
//# sourceMappingURL=list.js.map