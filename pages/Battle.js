"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./battle.css");

var _Card = _interopRequireDefault(require("../component/Card/Card"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//查找项目面板
var BattleStart = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BattleStart, _React$Component);

  var _super = _createSuper(BattleStart);

  function BattleStart(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BattleStart);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getOne", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var url, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.inputOne.value === '')) {
                _context.next = 4;
                break;
              }

              //如果为空，提示，删掉输入框多余空格，return，下面的不做了
              alert("请输入项目名称");
              _this.inputOne.value = "";
              return _context.abrupt("return");

            case 4:
              //查找项目的url
              url = "https://api.github.com/search/repositories?q=".concat(_this.inputOne.value, " in:name&sort=stars&order=desc&type=Repositories&per_page=1"); //开始查找

              _this.setState({
                loadingOne: true
              });

              _context.prev = 6;
              _context.next = 9;
              return _axios["default"].get(url);

            case 9:
              res = _context.sent;

              if (!(res.data.items.length === 0)) {
                _context.next = 14;
                break;
              }

              //空的，提示，return
              alert("未查询到项目,请重新输入");
              _this.inputOne.value = "";
              return _context.abrupt("return");

            case 14:
              //能到这里说明返回值不空，调用battle里的setone函数把获取到的项目存储起来
              _this.props.setOne(res.data.items[0]); //标识已经找到


              _this.setState({
                getOne: true
              });

              _context.next = 20;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](6);

            case 20:
              //查找完成
              _this.setState({
                loadingOne: false
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 18]]);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rmOne", function () {
      _this.props.setOne({});

      _this.setState({
        getOne: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTwo", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var url, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.inputTwo.value === '')) {
                _context2.next = 4;
                break;
              }

              alert("请输入项目名称");
              _this.inputTwo.value = "";
              return _context2.abrupt("return");

            case 4:
              url = "https://api.github.com/search/repositories?q=".concat(_this.inputTwo.value, " in:name&sort=stars&order=desc&type=Repositories&per_page=1");

              _this.setState({
                loadingTwo: true
              });

              _context2.prev = 6;
              _context2.next = 9;
              return _axios["default"].get(url);

            case 9:
              res = _context2.sent;

              if (!(res.data.items.length === 0)) {
                _context2.next = 14;
                break;
              }

              alert("未查询到项目,请重新输入");
              _this.inputTwo.value = "";
              return _context2.abrupt("return");

            case 14:
              _this.props.setTwo(res.data.items[0]);

              _this.setState({
                getTwo: true
              });

              _context2.next = 20;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](6);

            case 20:
              _this.setState({
                loadingTwo: false
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 18]]);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rmTwo", function () {
      _this.props.setTwo({});

      _this.setState({
        getTwo: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "oneInputChange", function () {
      var submitOne = _this.submitOne;

      if (_this.inputOne.value === '') {
        submitOne.className = "button-submit disable-button";
        return;
      }

      submitOne.className = "button-submit";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "twoInputChange", function () {
      var submitTwo = _this.submitTwo;

      if (_this.inputTwo.value === '') {
        submitTwo.className = "button-submit disable-button";
        return;
      }

      submitTwo.className = "button-submit";
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "oneEnter", function (e) {
      if (e.key === "Enter") {
        _this.getOne();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "twoEnter", function (e) {
      if (e.key === "Enter") {
        _this.getTwo();
      }
    });
    _this.state = {
      getOne: false,
      //判断第一个是否已经获取
      getTwo: false,
      //判断第二个是否已经获取
      loadingOne: false,
      //第一个是否在查找
      loadingTwo: false //第二个是否在查找

    };
    return _this;
  } //查找第一个player


  (0, _createClass2["default"])(BattleStart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var battleStyles = {
        iFont: {
          fontSize: 200
        },
        iFontDel: {
          fontSize: 20
        },
        getImg: {
          width: '50px',
          height: '50px',
          margin: '5px'
        }
      };
      var _this$props = this.props,
          battleStart = _this$props.battleStart,
          playerOne = _this$props.playerOne,
          playerTwo = _this$props.playerTwo;
      var _this$state = this.state,
          getOne = _this$state.getOne,
          getTwo = _this$state.getTwo,
          loadingOne = _this$state.loadingOne,
          loadingTwo = _this$state.loadingTwo;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "instructions-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Instructions")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex flex-wrap flex-space-around"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "instruction center"
      }, "Enter two Github project"), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-users ",
        style: _objectSpread(_objectSpread({}, battleStyles.iFont), {}, {
          color: 'rgb(255, 191, 116)'
        })
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "instruction center"
      }, "Battle"), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-fighter-jet",
        style: _objectSpread(_objectSpread({}, battleStyles.iFont), {}, {
          color: 'rgb(114, 114, 114)'
        })
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "instruction center"
      }, "See the winner"), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-trophy",
        style: _objectSpread(_objectSpread({}, battleStyles.iFont), {}, {
          color: 'rgb(255, 215, 0)'
        })
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Players")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex flex-wrap flex-space-around"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "instruction"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "playerh2"
      }, "Player One"), loadingOne ? /*#__PURE__*/_react["default"].createElement("div", null, "\u6B63\u5728\u67E5\u627E", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : getOne ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "getPlayer"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: playerOne.owner.avatar_url,
        alt: playerOne.name,
        style: battleStyles.getImg
      }), playerOne.name, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.rmOne,
        className: "button-del"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa fa-times",
        style: _objectSpread(_objectSpread({}, battleStyles.iFontDel), {}, {
          color: 'rgb(194, 57, 42)'
        })
      }))) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        ref: function ref(input) {
          return _this2.inputOne = input;
        },
        placeholder: "github project",
        className: "player-input",
        onChange: this.oneInputChange,
        onKeyDown: this.oneEnter
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.getOne,
        className: "button-submit disable-button",
        ref: function ref(button) {
          return _this2.submitOne = button;
        }
      }, "Submit"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "instruction"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "playerh2"
      }, "Player Two"), loadingTwo ? /*#__PURE__*/_react["default"].createElement("div", null, "\u6B63\u5728\u67E5\u627E", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : getTwo ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "getPlayer"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: playerTwo.owner.avatar_url,
        alt: playerTwo.name,
        style: battleStyles.getImg
      }), playerTwo.name, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.rmTwo,
        className: "button-del"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa fa-times",
        style: _objectSpread(_objectSpread({}, battleStyles.iFontDel), {}, {
          color: 'rgb(194, 57, 42)'
        })
      }))) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        ref: function ref(input) {
          return _this2.inputTwo = input;
        },
        placeholder: "github project",
        className: "player-input",
        onChange: this.twoInputChange,
        onKeyDown: this.twoEnter
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.getTwo,
        className: "button-submit disable-button",
        ref: function ref(button) {
          return _this2.submitTwo = button;
        }
      }, "Submit")))), getOne && getTwo && /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: battleStart,
        className: "button-buttle"
      }, "Battle")));
    }
  }]);
  return BattleStart;
}(_react["default"].Component); //比较结果展示面板


var BattleEnd = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(BattleEnd, _React$Component2);

  var _super2 = _createSuper(BattleEnd);

  function BattleEnd() {
    (0, _classCallCheck2["default"])(this, BattleEnd);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(BattleEnd, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          playerOne = _this$props2.playerOne,
          playerTwo = _this$props2.playerTwo,
          winner = _this$props2.winner,
          resetClick = _this$props2.resetClick;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "grid"
      }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
        source: playerOne,
        index: winner === playerOne.name ? "Winner" : winner === "" ? "Tie" : "Loser"
      }), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
        source: playerTwo,
        index: winner === playerTwo.name ? "Winner" : winner === "" ? "Tie" : "Loser"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: resetClick,
        className: "button-reset"
      }, "Reset")));
    }
  }]);
  return BattleEnd;
}(_react["default"].Component); //Battle


var Battle = /*#__PURE__*/function (_React$Component3) {
  (0, _inherits2["default"])(Battle, _React$Component3);

  var _super3 = _createSuper(Battle);

  function Battle(props) {
    var _this3;

    (0, _classCallCheck2["default"])(this, Battle);
    _this3 = _super3.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "setOne", function (inOne) {
      _this3.setState({
        playerOne: inOne
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "setTwo", function (inTwo) {
      _this3.setState({
        playerTwo: inTwo
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "battleStart", function () {
      //从state中取出获取到的两个项目
      var _this3$state = _this3.state,
          playerOne = _this3$state.playerOne,
          playerTwo = _this3$state.playerTwo;

      if (playerOne.stargazers_count > playerTwo.stargazers_count) {
        //one赢了
        _this3.setState({
          battle: true,
          winner: playerOne.name
        });
      } else if (playerOne.stargazers_count === playerTwo.stargazers_count) {
        //平局
        _this3.setState({
          battle: true,
          winner: ""
        });
      } else {
        //two赢了
        _this3.setState({
          battle: true,
          winner: playerTwo.name
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "resetClick", function () {
      _this3.setState({
        playerOne: {},
        playerTwo: {},
        battle: false,
        winner: ""
      });
    });
    _this3.state = {
      playerOne: {},
      //存储第一个获取的数据
      playerTwo: {},
      //存储第二个获取的数据
      battle: false,
      //判断是否已经比较，如果未比较，展示battlestart面板，如果已经比较，展示battleend面板
      winner: "" //胜利者是谁

    };
    return _this3;
  } //通过参数设置存储第一个获取的值


  (0, _createClass2["default"])(Battle, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          playerOne = _this$state2.playerOne,
          playerTwo = _this$state2.playerTwo,
          battle = _this$state2.battle,
          winner = _this$state2.winner;
      return /*#__PURE__*/_react["default"].createElement("div", null, battle ? /*#__PURE__*/_react["default"].createElement(BattleEnd, {
        playerOne: playerOne,
        playerTwo: playerTwo,
        winner: winner,
        resetClick: this.resetClick
      }) : /*#__PURE__*/_react["default"].createElement(BattleStart, {
        setOne: this.setOne,
        setTwo: this.setTwo,
        battleStart: this.battleStart,
        playerOne: playerOne,
        playerTwo: playerTwo
      }));
    }
  }]);
  return Battle;
}(_react["default"].Component);

var _default = Battle;
exports["default"] = _default;