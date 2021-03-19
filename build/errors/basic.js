"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  NOT_FOUND: function NOT_FOUND(error) {
    return {
      code: 404,
      message: "Not found",
      error: error
    };
  },
  ALREADY_EXIST: function ALREADY_EXIST(error) {
    return {
      code: 400,
      message: "Already exist",
      error: error
    };
  },
  FIELD_IS_REQUIRED: function FIELD_IS_REQUIRED(error) {
    return {
      code: 400,
      message: "Field is required",
      error: error
    };
  },
  INVALID_OTP: function INVALID_OTP(error) {
    return {
      code: 401,
      message: "The OTP is incorrect",
      error: error
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=basic.js.map