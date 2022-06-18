"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tmpFolder = (0, _path.resolve)(__dirname, "..", "..", "tmp");
var _default = {
  tmpFolder,
  storage: _multer.default.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const filehash = _crypto.default.randomBytes(16).toString("hex");

      const filename = `${filehash}-${file.originalname}`;
      return callback(null, filename);
    }
  })
};
exports.default = _default;