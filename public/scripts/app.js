'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubCom = function (_React$Component) {
    _inherits(SubCom, _React$Component);

    function SubCom() {
        _classCallCheck(this, SubCom);

        return _possibleConstructorReturn(this, (SubCom.__proto__ || Object.getPrototypeOf(SubCom)).apply(this, arguments));
    }

    _createClass(SubCom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'title=',
                this.props.title
            );
        }
    }]);

    return SubCom;
}(React.Component);

var SupCom = function (_React$Component2) {
    _inherits(SupCom, _React$Component2);

    function SupCom() {
        _classCallCheck(this, SupCom);

        return _possibleConstructorReturn(this, (SupCom.__proto__ || Object.getPrototypeOf(SupCom)).apply(this, arguments));
    }

    _createClass(SupCom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(SubCom, { title: 'first' }),
                React.createElement(SubCom, { title: 'second' }),
                React.createElement(SubCom, { title: 'third' })
            );
        }
    }]);

    return SupCom;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(SupCom, null), appRoot);
