'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Com = function (_React$Component) {
    _inherits(Com, _React$Component);

    function Com(props) {
        _classCallCheck(this, Com);

        var _this = _possibleConstructorReturn(this, (Com.__proto__ || Object.getPrototypeOf(Com)).call(this, props));

        _this.click = _this.click.bind(_this);
        _this.state = {
            count: 0,
            name: props.name
        };
        return _this;
    }

    _createClass(Com, [{
        key: 'getName',
        value: function getName() {
            return this.props.name;
        }
    }, {
        key: 'click',
        value: function click() {
            this.setState(function (preState) {
                return { count: preState.count + 1 };
            });

            //this.setState({ count:100 })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                ' ',
                this.state.name,
                ': ',
                this.state.count,
                React.createElement(
                    'button',
                    { onClick: this.click.bind(this) },
                    'Clickme'
                )
            );
        }
    }]);

    return Com;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Com, { name: 'erfan' }), appRoot);
