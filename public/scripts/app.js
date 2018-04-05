'use strict';

var user = 'Erfan';
var userAge = 80;

var getAge = function getAge(userAge_) {
    return userAge_;
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is a test paragraph'
    ),
    React.createElement(
        'div',
        null,
        getAge(userAge)
    ),
    React.createElement(
        'div',
        null,
        userAge > 19 ? React.createElement(
            'b',
            null,
            'big'
        ) : 'small'
    ),
    React.createElement('div', null),
    React.createElement(
        'div',
        null,
        ' blue color ',
        user.toUpperCase()
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
