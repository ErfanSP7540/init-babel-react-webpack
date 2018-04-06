'use strict';

var Com = function Com(props) {
    return React.createElement(
        'div',
        null,
        props.name
    );
};

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Com, { name: 'erfan' }), appRoot);
