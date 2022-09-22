// 插件配置
module.exports = [
    // 自定义插件，即本地插件
    [
        {
            name: "custom-plugins",
            globalUIComponents: ["BlockToggle", "GlobalTip", "Aplayer"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        },
    ],

    // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
    // 添加一个动态的标题
    [
        "dynamic-title",
        {
            showIcon:
                "https://symbol-node.oss-cn-shanghai.aliyuncs.com/blog/basic/favicon.ico",
            showText: "ヾ(≧▽≦*)o欢迎回来！",
            hideIcon:
                "https://symbol-node.oss-cn-shanghai.aliyuncs.com/blog/basic/favicon.ico",
            hideText: "ಥ_ಥ不要走呀！",
            recoverTime: 2000, //  持续时间
        },
    ],
    // 增加鼠标点击动效
    [
        'cursor-effects',
        {
            size: 2, // size of the particle, default: 2
            shape: 'star',  // ['star' | 'circle'] // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
    ],
    // 使用悬挂喵作为返回顶部按钮
    ['go-top'],
    // 顶部的阅读进度插件。
    [
        'reading-progress'
    ],
    // 全文搜索
    ['fulltext-search']
]