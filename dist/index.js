"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ShowText = _interopRequireDefault(require("./components/ShowText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const returnLibrary = () => {
  return {
    ShowText: _ShowText.default // you can add here other components that you want to export

  };
};

var _default = returnLibrary();

exports.default = _default;