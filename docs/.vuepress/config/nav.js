// const language = require("../nav/language");
// const projects = require("../nav/projects");
// const tools = require("../nav/tools");
const technology = require("../nav/technology");
const web = require("../nav/web");
const books = require("../nav/books");
const moreNav = require("../nav/moreNav");
const indexNav = require("../nav/indexNav");

module.exports = [
    { text: "首页", link: "/" },
    { text: "随笔", link: "/speak/" },

    web, // 前端

    technology, // 技术

    books, // 书籍
    {
        text: '导航站', link: '/navigation/'
    },
    indexNav,     // 我的
    moreNav,     // 更多
    // language,   // 语言
    // tools,  // 工具
    // projects,  // 项目
];
