"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _axios = _interopRequireDefault(require("axios"));

var _Loading = _interopRequireDefault(require("../component/Loading/Loading"));

var _Card = _interopRequireDefault(require("../component/Card/Card"));

require("./Popular.css");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//分类菜单
var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _onClick = _this$props.onClick,
          current = _this$props.current;
      var links = [{
        title: 'All',
        query: 'stars:>1'
      }, {
        title: 'JavaScript',
        query: 'stars:>1+language:javascript'
      }, {
        title: 'Ruby',
        query: 'stars:>1+language:ruby'
      }, {
        title: 'Java',
        query: 'stars:>1+language:java'
      }, {
        title: 'CSS',
        query: 'stars:>1+language:css'
      }];
      var link = links.map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "li",
          key: key
        }, /*#__PURE__*/_react["default"].createElement("button", {
          onClick: function onClick() {
            return _onClick(item.query);
          },
          className: current == item.query ? 'btnActive' : 'btnDefault'
        }, item.title));
      });
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "uls"
      }, link);
    }
  }]);
  return Menu;
}(_react["default"].Component); //内容列表无限加载


var ContentListInfinite = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(ContentListInfinite, _React$Component2);

  var _super2 = _createSuper(ContentListInfinite);

  function ContentListInfinite(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ContentListInfinite);
    _this = _super2.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "search", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var query, _this$state, pageNum, pageEnd, items, url, res;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _this.props.query;
              _this$state = _this.state, pageNum = _this$state.pageNum, pageEnd = _this$state.pageEnd, items = _this$state.items; //如果当前页已经是最后一页或超出，设置加载更多为false，不再继续加载

              if (!(pageNum > pageEnd)) {
                _context.next = 5;
                break;
              }

              _this.setState({
                hasMore: false
              });

              return _context.abrupt("return");

            case 5:
              //不是最后一页就继续请求数据加载   
              url = "https://api.github.com/search/repositories?q=".concat(query, "&sort=stars&order=desc&type=Repositories&page=").concat(pageNum);
              _context.prev = 6;
              _context.next = 9;
              return _axios["default"].get(url);

            case 9:
              res = _context.sent;

              //concat是数组拼接函数，把这次请求到的数据加到之前加载的数据数组里
              _this.setState({
                items: items.concat(res.data.items)
              });

              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);

            case 15:
              //当前页+1
              _this.setState({
                pageNum: pageNum + 1
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13]]);
    })));
    _this.state = {
      hasMore: true,
      //当前加载页数
      pageNum: 1,
      //最多加载页数
      pageEnd: 3,
      //存放请求到的数据
      items: []
    };
    return _this;
  }

  (0, _createClass2["default"])(ContentListInfinite, [{
    key: "componentDidMount",
    value: function componentDidMount() {} //组件props和state更新时调用

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //判断当前要查询的类别是否有改变
      if (this.props.query != prevProps.query) {
        //有改变，即切换了分类
        this.setState({
          //把之前分类加载的内容清空，当前页重置为第一页，设置继续加载为true
          items: [],
          pageNum: 1,
          hasMore: true
        });
      }
    } //请求函数

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          hasMore = _this$state2.hasMore,
          items = _this$state2.items;
      var cards = items.map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          key: key,
          source: item,
          index: key + 1
        });
      });
      return /*#__PURE__*/_react["default"].createElement(_reactInfiniteScroller["default"], {
        pageStart: 0,
        loadMore: function loadMore() {
          return _this2.search();
        },
        hasMore: hasMore,
        loader: /*#__PURE__*/_react["default"].createElement("div", {
          className: "loader",
          key: 0
        }, /*#__PURE__*/_react["default"].createElement(_Loading["default"], null))
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "grid"
      }, cards));
    }
  }]);
  return ContentListInfinite;
}(_react["default"].Component); //内容部分


var Popular = /*#__PURE__*/function (_React$Component3) {
  (0, _inherits2["default"])(Popular, _React$Component3);

  var _super3 = _createSuper(Popular);

  function Popular(props) {
    var _this3;

    (0, _classCallCheck2["default"])(this, Popular);
    _this3 = _super3.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "onClick", function (query) {
      _this3.setState({
        query: query
      });
    });
    _this3.state = {
      query: 'stars:>1'
    };
    return _this3;
  }

  (0, _createClass2["default"])(Popular, [{
    key: "render",
    value: function render() {
      var query = this.state.query;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Menu, {
        onClick: this.onClick,
        current: query
      }), /*#__PURE__*/_react["default"].createElement(ContentListInfinite, {
        query: query
      }));
    }
  }]);
  return Popular;
}(_react["default"].Component);

var _default = Popular;
exports["default"] = _default;