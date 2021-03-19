"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schemaDefinition = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  role: {
    type: String,
    "enum": ["admin", "subscriber"]
  }
});

var _default = _mongoose["default"].model("users", schemaDefinition);

exports["default"] = _default;
//# sourceMappingURL=user.model.js.map