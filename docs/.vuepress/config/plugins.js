// 插件配置
module.exports = [

    // 自定义插件，即本地插件
    [
        {
            name: "custom-plugins",
            globalUIComponents: ["BlockToggle", "GlobalTip", "Aplayer"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        },
    ],

    // 评论插件
    [
        'vuepress-plugin-comment',
        {
            choosen: 'gitalk',
            options: {
                clientID: '61f225475ee82228c429',  // 你的client ID
                clientSecret: 'a76281b6fd34103a46bb0be85e5ece40555e8296',  // 你的client secret
                repo: 'blogs', // GitHub 仓库
                owner: 'Max-Kevin', // GitHub仓库所有者
                admin: ['Max-Kevin'], // 对仓库有写权限的人
                // distractionFreeMode: true,
                pagerDirection: 'last', // 'first'正序 | 'last'倒序
                // 下面的不用修改，默认这些即可
                id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                body:
                    '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
            }
        }
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
    [
        'go-top'
    ],

    // 顶部的阅读进度插件。
    [
        'reading-progress'
    ],

    // 全文搜索
    [
        'fulltext-search'
    ]
]