"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var velem = _interopRequire(require("./"));

var VNode = _interopRequire(require("virtual-dom/vnode/vnode"));




it("fd-velem", function () {
  var div = velem("div")({})(["Hello World"]);
  assert(div instanceof VNode);
});