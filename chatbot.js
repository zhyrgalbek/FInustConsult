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
    text: 'Более подробные ответы вы получите связавшись по номеру +996 554 430 000 '
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

// let data;
// fetch('./chatbot.json').then(response => {
//     return response.json()
// }).then(json => {
//     data = json;
// });

var chatbot_questions = document.querySelector('#chatbot_questions');

var questions = void 0;
var category = void 0;

for (var i = 0; i < chatbot_questions.children.length; i++) {
    if (chatbot_questions.children[i].dataset.name == 'questions') {
        questions = chatbot_questions.children[i];
    }
    if (chatbot_questions.children[i].dataset.name == 'category') {
        category = chatbot_questions.children[i];
    }
}
var m = [];
for (var _i = 0; _i < questions.children.length; _i++) {
    var obj = {};
    for (var j = 0; j < questions.children[_i].children.length; j++) {
        obj[questions.children[_i].children[j].dataset.name] = questions.children[_i].children[j].innerText;
    }
    m[_i] = obj;
}
var data = [[].concat(m)];
var cat = [];

for (var _i2 = 0; _i2 < category.children.length; _i2++) {
    cat[_i2] = {
        id: category.children[_i2].dataset.id,
        vopros: category.children[_i2].innerText
    };
}
cat = [[].concat(_toConsumableArray(cat))];

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
                    stroke: '#277E37', 'stroke-width': '2.25', 'stroke-miterlimit': '10', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M23.9947 17H24.0082', stroke: '#277E37', 'stroke-width': '3', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M17.9932 17H18.0067', stroke: '#277E37', 'stroke-width': '3', 'stroke-linecap': 'round',
                    'stroke-linejoin': 'round' }),
                React.createElement('path', { d: 'M11.9918 17H12.0052', stroke: '#277E37', 'stroke-width': '3', 'stroke-linecap': 'round',
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
                            _onClick(elem);
                        } },
                    elem.vopros
                );
            })
        )
    );
};

var WatsappComponent = function WatsappComponent() {
    return React.createElement(
        React.Fragment,
        null,
        chatbotText[0][3].text,
        React.createElement('br', null),
        React.createElement(
            'div',
            { 'class': 'telephone chatbotTelephone', style: { display: 'inline-flex' } },
            React.createElement(
                'a',
                { href: 'tel:+996554430000' },
                React.createElement(
                    'svg',
                    { width: '20', height: '20', viewBox: '0 0 88 92', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement('path', { d: 'M22.5 6.5L16.5 1H11.5L8.5 3.5L4.5 8L1 15.5V31L1.5 32.5L6.5 44.5L17 59L27.5 70.5L37.5 79.5L53.5 88.5C56.1667 89.1667 61.6 90.6 62 91C62.4 91.4 69.5 90.8333 73 90.5C74.6667 90 78.1 88.9 78.5 88.5C78.9 88.1 81.6667 86 83 85L87.5 80V74L87 73.5L86 72L84 70L79 64.5L71.5 57L69.5 56L67 55.5H64.5L62.5 57L55 64.5H54.5L51.5 62.5L47 59.5L42 55.5L37.5 51L33.5 46.5L28.5 38.5L26 34.5L27.5 32.5L31 29L34 25.5L35 22.5L34.5 19.5L34 18L31 15L22.5 6.5Z', fill: '#277E37', stroke: '#277E37' })
                )
            )
        ),
        React.createElement(
            'a',
            { href: 'https://wa.me/+996554430000', className: 'soc_set', title: 'whatsapp' },
            React.createElement('img', { src: './assets2/images/logo/whatsapp.svg', width: '38', height: '38', alt: 'whatsapp' })
        ),
        React.createElement(
            'a',
            { href: 'https://t.me/+996554430000', className: 'soc_set', title: 'telegram' },
            React.createElement('img', { src: './assets2/images/logo/telegram.svg', width: '38', height: '38', alt: 'telegram' })
        )
    );
};

var words = [['првет', 'привет', 'ghbdtn', 'здравствуй', 'Привет', 'Ghbdtn'], ['Привет', 'Здравствуйте', 'Добрый день', 'Рад тебя видеть!'], ['Пока', 'До свидания', 'пока'], ['Пока', 'До свидания', 'Приходи еше', 'Я буду скучать!']];

function answering(words, elem) {
    for (var _i3 = 0; _i3 < words[0].length; _i3++) {
        if (elem.text.trim() == words[0][_i3] && elem.variant === 'client') {
            var s = Math.floor(Math.random() * words[1].length);
            console.log(s);
            return words[1][s];
        }
        if (elem.text.trim() == words[2][_i3] && elem.variant === 'client') {
            var _s = Math.floor(Math.random() * words[3].length);
            console.log(_s);
            return words[3][_s];
        }
    }
}

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

function filterLayer(arr, data) {
    var word = arr[arr.length - 1].text;
    var f = data.flat(1);
    var newData = f.filter(function (elem) {
        if (elem.vopros.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "").indexOf(word.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "")) !== -1) {
            return elem;
        }
    });
    return [[].concat(_toConsumableArray(newData))];
}

function getQuestions(arr, elem) {
    var k = arr.flat(1);
    var p = k.filter(function (el) {
        return +el.parent_id === +elem.id;
    });
    return [[].concat(_toConsumableArray(p))];
}

var ChatBot = function ChatBot(_ref2) {
    var handleClose = _ref2.handleClose;

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        input = _React$useState6[0],
        setInput = _React$useState6[1];

    var _React$useState7 = React.useState(false),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        btn = _React$useState8[0],
        setBtn = _React$useState8[1];

    var _React$useState9 = React.useState([]),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        messages = _React$useState10[0],
        setMessages = _React$useState10[1];

    var _React$useState11 = React.useState(),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        questions = _React$useState12[0],
        setQuoestions = _React$useState12[1];

    var windowref = React.useRef();

    var onClickItem = function onClickItem(elem) {
        setMessages(function (prev) {
            var arr = prev.filter(function (elem) {
                return elem.variant !== 'vopros';
            });
            var date = new Date();
            arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: elem.vopros, variant: 'client', time: date.getHours() + ':' + date.getMinutes() }]);
            return arr;
        });
        setTimeout(function () {
            setMessages(function (prev) {
                var arr = prev.filter(function (elem) {
                    return elem.variant !== 'vopros';
                });
                arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                return arr;
            });
        }, 1000);
        setTimeout(function () {
            setTimeout(function () {
                setMessages(function (prev) {
                    var arr = prev.filter(function (elem) {
                        return elem.variant !== 'vopros';
                    });
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                    return arr;
                });
            }, 1000);
            setTimeout(function () {
                setMessages(function (prev) {
                    var arr = prev.filter(function (elem) {
                        return elem.variant !== 'loader';
                    });
                    var date = new Date();
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement(WatsappComponent, null), variant: 'vopros', time: date.getHours() + ':' + date.getMinutes() }]);
                    return arr;
                });
            }, 2000);
            setMessages(function (prev) {
                var arr = prev.filter(function (elem) {
                    return elem.variant !== 'loader';
                });
                var date = new Date();
                arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: elem.text, variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
                return arr;
            });
        }, 2000);
    };
    var onClicktwoItem = function onClicktwoItem(elem) {
        setMessages(function (prev) {
            var arr = prev.filter(function (elem) {
                return elem.variant !== 'vopros';
            });
            var date = new Date();
            arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: elem.vopros, variant: 'client', time: date.getHours() + ':' + date.getMinutes() }]);
            return arr;
        });
        setTimeout(function () {
            setMessages(function (prev) {
                var arr = prev.filter(function (elem) {
                    return elem.variant !== 'vopros';
                });
                arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement('div', { className: 'loader' }), variant: 'loader' }]);
                return arr;
            });
        }, 1000);
        setTimeout(function () {
            setMessages(function (prev) {
                var arr = prev.filter(function (elem) {
                    return elem.variant !== 'loader';
                });
                var date = new Date();
                var newData = getQuestions(data, elem);
                arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement(ChatList, { data: newData, onClick: onClickItem }), variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
                return arr;
            });
        }, 2000);
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
                    var otvet = answering(words, arr[arr.length - 1]);
                    if (otvet) {
                        return [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: otvet, variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
                    }
                    arr = [].concat(_toConsumableArray(arr), [{ id: Date.now(), text: React.createElement(ChatList, { data: cat, onClick: onClicktwoItem }), variant: 'admin', time: date.getHours() + ':' + date.getMinutes() }]);
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