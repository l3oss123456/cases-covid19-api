"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ws = _interopRequireDefault(require("ws"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var wss = new _ws["default"].Server({
  port: 4000
});
wss.on("connection", function (ws) {
  // สร้าง connection
  ws.on("message", function (message) {// รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
  });
  ws.on("close", function () {
    // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
    ws.send("websocket disconnected !");
  });
  ws.send("websocket connected !");
});
var _default = wss;
exports["default"] = _default;
//# sourceMappingURL=websocket.js.map