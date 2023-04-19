'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var chatbotText = [[{
    text: 'Здраствуйте, чем я могу вам помочь?'
}, {
    text: 'была ли это информация полезной?'
}, {
    text: 'Рады были Вам помочь! Спасибо за обращение!'
}, {
    text: 'Если вы не получили ответ на свой вопрос, напишите нам на почту ceofinjust@gmail.com'
}, {
    text: 'Введите ваше сообщение'
}, {
    text: 'Выберите пункты'
}], [{
    text: 'Саламатсызбы, сизге кантип жардам берсем болот?'
}, {
    text: 'бул маалымат пайдалуу болдубу?'
}, {
    text: 'Биз сизге жардам бергенибизге кубанычтабыз! Пикириңиз үчүн рахмат!'
}, {
    text: 'Сурооңузга жооп ала элек болсоңуз, бизге check.edu.gov.kg.@gmail.com дарегине кат жазыңыз.'
}, {
    text: 'Кабарыңызды киргизиңиз'
}, {
    text: 'Элементтерди тандаңыз'
}]];

var data = void 0;
fetch('./chatbot.json').then(function (response) {
    return response.json();
}).then(function (json) {
    data = json;
});

var ChatBotButton = function ChatBotButton() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        openChat = _React$useState2[0],
        setOpenChat = _React$useState2[1];

    var _React$useState3 = React.useState('rgba(55, 99, 255, 0.3)'),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        iconSvg = _React$useState4[0],
        setIconSvg = _React$useState4[1];

    var onClickBtn = function onClickBtn() {
        setOpenChat(true);
    };
    var handleClose = function handleClose() {
        setOpenChat(false);
    };
    return React.createElement(
        'div',
        { className: 'containerChat' },
        openChat && React.createElement(ChatBot, { handleClose: handleClose }),
        React.createElement(
            'button',
            { className: 'chatbotBtnBlock', onClick: onClickBtn },
            React.createElement(
                'svg',
                { width: '32', height: '33', viewBox: '0 0 36 37', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', {
                    d: 'M12.75 29H12C6 29 3 27.5 3 20V12.5C3 6.5 6 3.5 12 3.5H24C30 3.5 33 6.5 33 12.5V20C33 26 30 29 24 29H23.25C22.785 29 22.335 29.225 22.05 29.6L19.8 32.6C18.81 33.92 17.19 33.92 16.2 32.6L13.95 29.6C13.71 29.27 13.155 29 12.75 29Z',
                    stroke: '#6A8AFF', 'stroke-width': '2.25', 'stroke-miterlimit': '10', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M23.9947 17H24.0082', stroke: '#6A8AFF', 'stroke-width': '3', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M17.9932 17H18.0067', stroke: '#6A8AFF', 'stroke-width': '3', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M11.9918 17H12.0052', stroke: '#6A8AFF', 'stroke-width': '3', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' })
            )
        )
    );
};

var ChatList = function ChatList(_ref) {
    var data = _ref.data,
        _onClick = _ref.onClick;

    return React.createElement(
        React.Fragment,
        null,
        chatbotText[0][5].text,
        React.createElement(
            'ul',
            { className: 'chatListBlock' },
            data[0].map(function (elem) {
                return React.createElement(
                    'li',
                    { className: 'chatListItem', onClick: function onClick() {
                            _onClick(elem.text);
                        } },
                    elem.vopros
                );
            })
        )
    );
};

function proverka(text, prev) {
    if (prev && text) {
        if (prev.variant !== 'voprosbot' && text.variant === 'client') {
            return '1';
        }
        if (prev.variant === 'voprosbot' && text.text === 'да' || prev.variant === 'voprosbot' && text.text === 'ооба' || prev.variant === 'voprosbot' && text.text === 'оба' || prev.variant === 'voprosbot' && text.text === 'yes') {
            return '2';
        }
        if (prev.variant === 'voprosbot' && text.text !== '') {
            return '3';
        }
    }
    return false;
}

var ChatBot = function ChatBot(_ref2) {
    var handleClose = _ref2.handleClose;

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        input = _React$useState6[0],
        setInput = _React$useState6[1];

    var _React$useState7 = React.useState([]),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        messages = _React$useState8[0],
        setMessages = _React$useState8[1];

    var _React$useState9 = React.useState(false),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        btn = _React$useState10[0],
        setBtn = _React$useState10[1];

    var windowref = React.useRef();
    var onClickItem = function onClickItem(text) {
        setMessages(function (prev) {
            var arr = prev.filter(function (elem) {
                return elem.variant !== 'vopros';
            });
            arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
            return arr;
        });
        setTimeout(function () {
            setMessages(function (prev) {
                var arr = prev.filter(function (elem) {
                    return elem.variant !== 'loader';
                });
                var date = new Date();
                arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: text, variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
                return arr;
            });
            setTimeout(function () {
                setMessages(function (prev) {
                    return [].concat(_toConsumableArray(prev), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                });
                setTimeout(function () {
                    setMessages(function (prev) {
                        var arr = prev.filter(function (elem) {
                            return elem.variant !== 'loader';
                        });
                        var date = new Date();
                        arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: chatbotText[0][1].text, variant: 'voprosbot', time: date.getHours() + ':' + date.getMinutes() }]);
                        return arr;
                    });
                }, 3000);
            }, 3000);
        }, 1000);
    };
    var handleChange = function handleChange(e) {
        setInput(e.target.value);
    };
    var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        var date = new Date();
        setMessages([].concat(_toConsumableArray(messages), [{ id: Date.now(), text: input, variant: 'client', time: date.getHours() + ':' + date.getMinutes() }]));
        setInput('');
        setBtn(function (prev) {
            return !prev;
        });
    };

    React.useEffect(function () {
        if (messages.length === 0) {
            var time = setTimeout(function () {
                setTimeout(function () {
                    setMessages(function (prev) {
                        var arr = prev.filter(function (elem) {
                            elem.variant !== 'loader';
                        });
                        var date = new Date();
                        arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: chatbotText[0][0].text, variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
                        return arr;
                    });
                }, 1000);
                setMessages(function (prev) {
                    var loader = prev.find(function (elem) {
                        return elem.variant === 'loader';
                    });
                    if (!loader) {
                        return [].concat(_toConsumableArray(prev), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                    }
                    return prev;
                });
            }, 500);
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '1') {
            var time = setTimeout(function () {
                setMessages(function (prev) {
                    var arr = prev.filter(function (elem) {
                        return elem.variant !== 'loader';
                    });
                    var date = new Date();
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement(ChatList, { data: data, onClick: onClickItem }), variant: 'vopros', time: date.getHours() + ':' + date.getMinutes() }]);
                    return arr;
                });
            }, 1000);
            setMessages(function (prev) {
                var loader = prev.find(function (elem) {
                    return elem.variant === 'loader';
                });
                if (!loader) {
                    return [].concat(_toConsumableArray(prev), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                }
                return prev;
            });
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '2') {
            var time = setTimeout(function () {
                setMessages(function (prev) {
                    var arr = prev.filter(function (elem) {
                        return elem.variant !== 'loader';
                    });
                    var date = new Date();
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: chatbotText[0][2].text, variant: 'vopros', time: date.getHours() + ':' + date.getMinutes() }]);
                    return arr;
                });
            }, 1000);
            setMessages(function (prev) {
                var loader = prev.find(function (elem) {
                    return elem.variant === 'loader';
                });
                if (!loader) {
                    return [].concat(_toConsumableArray(prev), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                }
                return prev;
            });
        }
        if (proverka(messages[messages.length - 1], messages[messages.length - 2]) === '3') {
            var time = setTimeout(function () {
                setMessages(function (prev) {
                    var arr = prev.filter(function (elem) {
                        return elem.variant !== 'loader';
                    });
                    var date = new Date();
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: chatbotText[0][3].text, variant: 'vopros', time: date.getHours() + ':' + date.getMinutes() }]);
                    return arr;
                });
            }, 1000);
            setMessages(function (prev) {
                var loader = prev.find(function (elem) {
                    return elem.variant === 'loader';
                });
                if (!loader) {
                    return [].concat(_toConsumableArray(prev), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                }
                return prev;
            });
        }
        return function () {
            clearTimeout(time);
        };
    }, [btn]);

    React.useEffect(function () {
        windowref.current.scrollTo(0, windowref.current.scrollHeight);
    }, [messages]);

    return React.createElement(
        'div',
        { className: 'chatbotBlock' },
        React.createElement(
            'div',
            { className: 'chatbotHeader' },
            React.createElement(
                'h2',
                { className: 'chatbotHeaderText' },
                React.createElement(
                    'span',
                    null,
                    '\u0424\u0438\u043D\u042E\u0441\u0442-\u043A\u043E\u043D\u0441\u0430\u043B\u0442 \u0447\u0430\u0442-\u0431\u043E\u0442'
                ),
                React.createElement(
                    'svg',
                    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: 'Img', onClick: handleClose },
                    React.createElement('path', { d: 'M18.7279 18.728L6 6.00006', stroke: '#fff', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
                    React.createElement('path', { d: 'M18.7279 6.27202L6 18.9999', stroke: '#fff', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'chatbotWindow', ref: windowref },
            messages.map(function (message) {
                return React.createElement(
                    'div',
                    { className: 'chatbotText ' + (message.variant === 'client' && 'client') },
                    React.createElement(
                        'span',
                        { className: 'Span ' + (message.variant === 'client' && 'SpanClient') },
                        message.text,
                        ' ',
                        React.createElement(
                            'span',
                            { className: 'time' },
                            message.time
                        )
                    )
                );
            })
        ),
        React.createElement(
            'form',
            { className: 'chatbotForm', onSubmit: handleSubmit },
            React.createElement('input', { type: 'text', value: input, onChange: handleChange, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442' }),
            React.createElement(
                'button',
                { type: 'submit' },
                '\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
            )
        )
    );
};

var domContainer = document.querySelector('#chatbot');
ReactDOM.render(React.createElement(ChatBotButton, null), domContainer);