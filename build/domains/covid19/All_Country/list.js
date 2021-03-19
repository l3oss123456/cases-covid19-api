"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = list_covid19_all_country;

var _axios = _interopRequireDefault(require("../../../utils/axios"));

var R = _interopRequireWildcard(require("ramda"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function list_covid19_all_country(_x, _x2) {
  return _list_covid19_all_country.apply(this, arguments);
}

function _list_covid19_all_country() {
  _list_covid19_all_country = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(country, lastdays) {
    var _listData, amount_covid19, amount_deads, amount_recovered, date, key, resp, cases, index, deaths, _index, recovered, _index2, byCases, ascendSort;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // console.log("country;", country)
            // const resp = await axios(`GET`, `/Brazil?lastdays=${lastdays}`)
            // return resp
            _listData = [];
            amount_covid19 = 0;
            amount_deads = 0;
            amount_recovered = 0;
            date = [];
            _context.t0 = regeneratorRuntime.keys(country);

          case 7:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 17;
              break;
            }

            key = _context.t1.value;
            _context.next = 11;
            return (0, _axios["default"])("GET", "/".concat(country[key], "?lastdays=").concat(lastdays));

          case 11:
            resp = _context.sent;
            date = Object.keys(resp.data.timeline.cases);

            if (resp.status === 200) {
              cases = Object.values(resp.data.timeline.cases);

              for (index in cases) {
                amount_covid19 += cases[index];
              }

              deaths = Object.values(resp.data.timeline.deaths);

              for (_index in deaths) {
                amount_deads += cases[_index];
              }

              recovered = Object.values(resp.data.timeline.recovered);

              for (_index2 in recovered) {
                amount_recovered += cases[_index2];
              }

              _listData.push({
                country: resp.data.country,
                cases: amount_covid19,
                deaths: amount_deads,
                recovered: amount_recovered
              });
            }

            amount_covid19 = 0;
            _context.next = 7;
            break;

          case 17:
            if (_listData) {
              byCases = R.descend(R.prop("cases"));
              ascendSort = R.sort(byCases, _listData);
              _listData = ascendSort;
            }

            return _context.abrupt("return", {
              data: _listData,
              date: date[0]
            });

          case 21:
            _context.prev = 21;
            _context.t2 = _context["catch"](0);
            console.log("error from list_covid19_US", _context.t2);
            return _context.abrupt("return", _context.t2);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));
  return _list_covid19_all_country.apply(this, arguments);
}
//# sourceMappingURL=list.js.map