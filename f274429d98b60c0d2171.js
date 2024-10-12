function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.timers.js";
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import goblinImg from "../images/goblin.png";
var GoblinGame = /*#__PURE__*/function () {
  function GoblinGame(boardSize) {
    _classCallCheck(this, GoblinGame);
    this.boardSize = boardSize;
    this.goblinImgElement = undefined;
  }
  return _createClass(GoblinGame, [{
    key: "gameInit",
    value: function gameInit() {
      var _this = this;
      document.addEventListener("DOMContentLoaded", function () {
        var gameBoard = document.querySelector("#game_container");
        _this.createGameBoard(gameBoard);
        setInterval(_this.moveGoblin, 800);
      });
    }
  }, {
    key: "createGameBoard",
    value: function createGameBoard(board) {
      for (var i = 0; i < this.boardSize; i += 1) {
        var row = document.createElement("tr");
        for (var j = 0; j < this.boardSize; j += 1) {
          var cell = document.createElement("td");
          cell.classList.add("cell_move");
          row.appendChild(cell);
        }
        board.appendChild(row);
      }
      return board;
    }
  }, {
    key: "moveGoblin",
    value: function moveGoblin() {
      var cells = document.querySelectorAll(".cell_move");
      var randomIndex = Math.floor(Math.random() * cells.length);
      var randomCell = cells[randomIndex];
      if (this.goblinImgElement) {
        this.goblinImgElement.remove();
      }
      var img = document.createElement("img");
      img.src = goblinImg;
      randomCell.appendChild(img);
      this.goblinImgElement = img;
    }
  }]);
}(); // export const boardSize = 4;
// let goblinImgElement = null;
// export function initGame() {
//   const gameBoard = document.querySelector('#game_container');
//   createGameBoard(gameBoard);
// }
// function createGameBoard(board) {
//   for (let i = 0; i < boardSize; i += 1) {
//     const row = document.createElement('tr');
//     for (let j = 0; j < boardSize; j += 1) {
//       const cell = document.createElement('td');
//       cell.classList.add('cell_move');
//       row.appendChild(cell);
//     }
//     board.appendChild(row);
//   }
//   return board;
// }
// function moveGoblin() {
//   const cells = document.querySelectorAll('.cell_move');
//   const randomIndex = Math.floor(Math.random() * cells.length);
//   const randomCell = cells[randomIndex];
//   if (goblinImgElement) {
//     goblinImgElement.remove();
//   }
//   const img = document.createElement('img');
//   img.src = goblinImg;
//   randomCell.appendChild(img);
//   goblinImgElement = img;
// }
// initGame()
// setInterval(moveGoblin, 800);
export { GoblinGame as default };