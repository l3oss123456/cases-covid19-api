"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *
 * @param {String} method //method for query -> GET,POST,PUT,DELETE
 * @param {String} pathUrl // path
 * @param {String} body //query command
 * @param {Boolean} isTestScript //Is use from test script?
 * @returns
 */
var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, pathUrl, body) {
    var url, resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // const PORT = process.env.REACT_APP_PORTBACKEND ? process.env.REACT_APP_PORTBACKEND : 8000
            url = "https://disease.sh/v3/covid-19/historical";
            _context.next = 4;
            return (0, _axios["default"])({
              //   url: `http://${window.location.hostname}:${process.env.REACT_APP_PORTBACKEND}/${pathUrl}`,
              //   url: `http://${window.location.hostname}:${PORT}/${pathUrl}`,
              //   url: `http://127.0.0.1:${PORT}/${pathUrl}`,
              url: "".concat(url).concat(pathUrl),
              data: body,
              method: method,
              headers: {//  "Access-Control-Allow-Origin": "*",
                //  'Access-Control-Allow-Headers': 'Set-Cookie'
                // Authorization: Cookies.get("tokenAccess"),
              }
            });

          case 4:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function fetchData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = fetchData;
exports["default"] = _default;
//# sourceMappingURL=axios.js.map