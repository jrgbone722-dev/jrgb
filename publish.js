var subdomains = [
    'thu', 'pku', 'fdu', 'sjtu', 'zju', 'nju', 'xmu', 'sysu', 'whu',
    'jlu', 'scu', 'ruc', 'bnu', 'nku', 'tju', 'sdu', 'hust', 'xjtu', 'hit',
];
function getRandomSubdomain() {
    var index = Math.floor(Math.random() * subdomains.length);
    return subdomains[index];
}
function getRandomString() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var emails = [
    'hlcgwcom@gmail.com'
];

// 最新入口（固定 5 条完整域名）
var newestUrls = [
    'https://heiliaocg13.com/',
    'https://heiliaocg14.com/',
    'https://heiliaocg15.com/',
    'https://heiliaocg16.com/',
    'https://heiliaocg17.com/',
];

// 永久网址
var foreverUrls = [
    'https://hlcgw.net',
];

// 永久中转
var foreverJumpUrls = [
    'https://heiliaocg17.com',
];

// 官方推特
var twitterUrls = [
    'https://x.com/hlcg1688',
];

var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
    '* 大陆地区用户我们强烈建议您截图收藏当前页面。'
];

// 生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');

    var htmlStr = '';
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr += '<li>' + items[i] + '</li>';
        } else {
            htmlStr += '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    if (text) {
        htmlStr += '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    // logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<img src="logo.png" width="180" style="margin-bottom: 10px;"/>';
    mainElem.appendChild(logoElem);

    // 收藏
    mainElem.appendChild(createFieldElem({
        title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路',
        items: []
    }));

    // 最新入口（5条）
    mainElem.appendChild(createFieldElem({
        title: '最新入口',
        items: newestUrls,
        text: '请使用https://协议访问黑料吃瓜网'
    }));

    // 永久网址
    mainElem.appendChild(createFieldElem({
        title: '永久网址',
        items: foreverUrls
    }));

    // 永久中转
    mainElem.appendChild(createFieldElem({
        title: '永久中转',
        items: foreverJumpUrls
    }));

    // 官方推特
    mainElem.appendChild(createFieldElem({
        title: '官方推特',
        items: twitterUrls
    }));

    // 邮箱
    mainElem.appendChild(createFieldElem({
        title: '发送任意内容至以下邮件获得最新地址',
        items: emails,
        plainText: true
    }));

    // 注意事项
    mainElem.appendChild(createFieldElem({
        title: '注意事项',
        items: notices,
        plainText: true,
        classStr: 'desc'
    }));
};
