'use strict';

var count = 0;

var clicked = function clicked() {
    count++;
    console.log('ksdskk');
    reRender();
};

var reRender = function reRender() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            null,
            'This is a '
        ),
        React.createElement(
            'p',
            null,
            'count ',
            count
        ),
        React.createElement(
            'button',
            { onClick: clicked },
            'ClickMe'
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};
reRender();
