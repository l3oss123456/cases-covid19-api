"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastData = exports.checkDelete = exports.checkUpdate = exports.findOneOrFindAll = exports.findOneIfNotExistThrowError = exports.findOneIfAlreadyExistThrowError = exports.findOrCreate = exports.findAndUpdateOrCreate = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _basic = _interopRequireDefault(require("../errors/basic"));

var R = _interopRequireWildcard(require("ramda"));

var _websocket = _interopRequireDefault(require("./websocket"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var findAndUpdateOrCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(repo, filter, data) {
    var obj;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return repo.findOne(filter);

          case 2:
            obj = _context.sent;

            if (!obj) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return repo.update(filter, data);

          case 6:
            obj = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return repo.create(data);

          case 11:
            obj = _context.sent;

          case 12:
            return _context.abrupt("return", obj);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findAndUpdateOrCreate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAndUpdateOrCreate = findAndUpdateOrCreate;

var findOrCreate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(repo, filter, data) {
    var obj;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return repo.findOne(filter);

          case 2:
            obj = _context2.sent;

            if (obj) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return repo.create(data);

          case 6:
            obj = _context2.sent;

          case 7:
            return _context2.abrupt("return", obj);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findOrCreate(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findOrCreate = findOrCreate;

var findOneIfAlreadyExistThrowError = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(repo, filter) {
    var obj;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return repo.findOne(filter);

          case 2:
            obj = _context3.sent;

            if (!obj) {
              _context3.next = 5;
              break;
            }

            throw _basic["default"].ALREADY_EXIST(_objectSpread({
              model: repo.model.modelName
            }, filter));

          case 5:
            return _context3.abrupt("return", obj);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findOneIfAlreadyExistThrowError(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findOneIfAlreadyExistThrowError = findOneIfAlreadyExistThrowError;

var findOneIfNotExistThrowError = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(repo, filter) {
    var obj;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return repo.findOne(filter);

          case 2:
            obj = _context4.sent;

            if (obj) {
              _context4.next = 5;
              break;
            }

            throw _basic["default"].NOT_FOUND(_objectSpread({
              model: repo.model.modelName
            }, filter));

          case 5:
            return _context4.abrupt("return", obj);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function findOneIfNotExistThrowError(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

exports.findOneIfNotExistThrowError = findOneIfNotExistThrowError;

var findOneOrFindAll = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(repo, filter) {
    var obj;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return repo.find(filter);

          case 2:
            obj = _context5.sent;
            return _context5.abrupt("return", obj);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function findOneOrFindAll(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.findOneOrFindAll = findOneOrFindAll;

var checkUpdate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(repo, filter, data) {
    var obj;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return repo.update(filter, data, {
              "new": true
            });

          case 2:
            obj = _context6.sent;

            if (obj) {
              _context6.next = 5;
              break;
            }

            throw _basic["default"].NOT_FOUND(_objectSpread({
              model: repo.model.modelName
            }, filter));

          case 5:
            return _context6.abrupt("return", obj);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function checkUpdate(_x13, _x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

exports.checkUpdate = checkUpdate;

var checkDelete = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(repo, filter) {
    var obj;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return repo.deleteOne(filter);

          case 2:
            obj = _context7.sent;

            if (obj) {
              _context7.next = 5;
              break;
            }

            throw _basic["default"].NOT_FOUND(_objectSpread({
              model: repo.model.modelName
            }, filter));

          case 5:
            return _context7.abrupt("return", obj);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function checkDelete(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();

exports.checkDelete = checkDelete;

var broadcastData = function broadcastData(data) {
  _websocket["default"].clients.forEach(function (client) {
    client.send(JSON.stringify(data));
  }); // wss.on("connection", (ws) => {
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

};

exports.broadcastData = broadcastData;
//# sourceMappingURL=domains.js.map