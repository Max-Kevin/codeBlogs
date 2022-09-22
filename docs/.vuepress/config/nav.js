// const language = require("../nav/language");
// const projects = require("../nav/projects");
// const tools = require("../nav/tools");
const technology = require("../nav/technology");
const books = require("../nav/books");

module.exports = [
    { text: "首页", link: "/" },
    { text: "随笔", link: "/speak/" },
    technology, // 技术

    books, // 书籍

    // language,   // 语言
    // tools,  // 工具
    // projects,  // 项目
];
