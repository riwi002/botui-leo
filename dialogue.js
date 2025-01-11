var botui = new BotUI('hello-world');

    botui.message.bot({
        delay: 200,
        content: "Hi, 66666👋"
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "我是 糖宝，你也可以叫我汤包🍭"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "他不是plmm！！！"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "然后呢？ 😃",
                value: "and"
            },
            {
                text: "少废话！ 🙄",
                value: "gg"
            }]
        })
    }).then(function(res) {
        if (res.value == "and") {
            other()
        }
        if (res.value == "gg") {
            return botui.message.bot({
                delay: 1500,
                content: "![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/blog/bqb/5OAWNP~8U049U6Z%24UYB7%60YU.jpg)"
            })
        }
    });

    var other = function() {
        botui.message.bot({
            delay: 1500,
            content: "😘"
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "18岁，是高二"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "略懂 HTML/PHP/JAVA，喜欢学习计算机内容"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "不过还是比较熟悉开服以及找plmm，最擅长白嫖o(*￣︶￣*)o"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "喜欢折腾，热爱折腾，目前正在电学一道上探索中"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "你目前在学习什么？ 🤔",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "在填写志愿时对比了所有的专业难易、类型而选择了机电！"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "为什么偏偏是机电？🤔",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "嘻嘻，我喜欢困难的内容（可能心理有点bt？），既要学习机械，还要学习电学！"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "难度指数在所有专业中难度系数最高，同时也是高考录取分数线最低的一个专业"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "目前往本科高校持续前进，希望高考530就能本科保底啦~"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "你还喜欢什么呢？🤔",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "当然是折腾事情了，不是在折腾就是在折腾事情的路上~"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "如果我的文章对你有所帮助的话，那么是我的荣幸 😊"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "那么，仔细看看我的博客吧？ ^_^"
            })
        });
    }
